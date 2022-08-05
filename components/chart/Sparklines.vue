<template>
  <div class="q-qa-sm">
    <div :id="chartId"></div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import {
  PieChartType,
  ChartMode,
  ChartThemePalete,
  Strokestyle,
  Position,
} from '@/types/chart';
import ApexCharts from 'apexcharts';
const props = defineProps({
  modelValue: Object,
  chartId: {
    type: String,
    default: 'chartDiv',
  },
  height: {
    type: String,
    default: 'auto',
  },
  width: {
    type: String,
    default: '100%',
  },
  labelunit: {
    type: String,
    default: '',
  },
  showLegend: {
    type: Boolean,
    default: true,
  },
  legendUseSeriesColors: {
    type: Boolean,
    default: true,
  },
  legendPosition: {
    type: String as PropType<Position>,
    default: 'bottom',
  },
  type: {
    type: String as PropType<PieChartType>,
    default: 'area', //area , line , bar
  },
  mode: {
    type: String as PropType<ChartMode>,
    default: 'light',
  },
  palette: {
    type: String as PropType<ChartThemePalete>,
    default: 'palette1',
  },
  series: {
    type: Array,
    default: () => [],
  },
  colors: {
    type: Array,
    default: () => [],
  },
  dark: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: Array,
    default: () => [],
  },
  strokestyle: {
    type: String as PropType<Strokestyle>,
    default: 'smooth', //smooth, straight, stepline
  },
});
const series = ref(props.series);
const chart = ref<any>(null);
const { t } = useLang();
watchEffect(() => {
  if (props.series && props.series.length > 0) {
    if (chart.value) {
      chart.value.updateOptions({
        series: props.series,
      });
    }
  }
});
onUnmounted(() => {
  if (chart.value) {
    chart.value.destroy();
    chart.value = null;
  }
});

onMounted(() => {
  chartSetup();
});
const chartSetup = () => {
  if (props.series.length > 0) {
    const options = {
      series: series.value,
      // series: props.series,
      chart: {
        width: props.width,
        height: props.height,
        type: props.type,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: 'easein', // linear, easeout, easein, easeinout, swing, bounce, elastic
          speed: 800,
        },
        sparkline: {
          enabled: true,
        },
      },
      theme: {
        mode: props.mode,
        palette: props.palette,
      },
      plotOptions: {},
      colors:
        props.colors && props.colors.length > 0 ? props.colors : undefined,
      categories: props.categories,
      stroke: {
        width: props.type == 'bar' ? 0 : 2.5,
        curve: props.strokestyle,
      },
      fill: {
        opacity: props.type == 'bar' ? 1 : 0.3,
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        // y: {
        //   title: {
        //     formatter: function (seriesName: any) {
        //       return '';
        //     },
        //   },
        // },
        marker: {
          show: false,
        },
      },
      responsive: [
        // {
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 200,
        //     },
        //     legend: {
        //       position: 'bottom',
        //     },
        //   },
        // },
      ],
    };
    chart.value = new ApexCharts(
      document.querySelector('#' + props.chartId),
      options
    );
    chart.value.render();
  }
};
</script>
