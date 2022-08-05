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
  showLegend: {
    type: Boolean,
    default: true,
  },
  legendUseSeriesColors: {
    type: Boolean,
    default: true,
  },
  legendFloating: {
    type: Boolean,
    default: false,
  },
  legendOffsetX: {
    type: Number,
    default: 0,
  },
  legendOffsetY: {
    type: Number,
    default: 0,
  },
  legendPosition: {
    type: String as PropType<Position>,
    default: 'bottom',
  },
  type: {
    type: String as PropType<PieChartType>,
    default: 'radialBar',
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
  showDataLabels: {
    type: Boolean,
    default: false,
  },
  labelRotate: {
    type: Number,
    default: 0,
  },
  startAngle: {
    type: Number,
    default: 0,
  },
  endAngle: {
    type: Number,
    default: 360,
  },
  stokeLineCap: {
    type: String as PropType<'round' | 'square' | 'butt'>,
    default: 'round', //round, square, butt
  },
  categories: {
    type: Array,
    default: () => [],
  },
  semi: {
    type: Boolean,
    default: false,
  },
  sparkline: {
    type: Boolean,
    default: false,
  },
  hollowBg: {
    type: Boolean,
    default: true,
  },
  trackBackgroud: {
    type: String,
    default: '#f0f0f0',
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
        // sparkline: {
        //   enabled: props.sparkline || props.semi,
        // },
        offsetY: props.semi ? -20 : 0,
      },
      theme: {
        mode: props.mode,
        palette: props.palette,
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: props.startAngle,
          endAngle: props.endAngle,
          hollow: {
            margin: 0,
            size: '55%',
            background:
              props.dark || !props.hollowBg || props.semi
                ? 'transparent'
                : '#fff',
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 3,
              opacity: 0.15,
            },
          },
          track: {
            background: props.trackBackgroud,
            strokeWidth: '100%',
            margin: 2, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            name: {
              offsetY: props.semi ? -30 : 0,
              show: true,
              color: props.dark ? '#fff' : '#8E8E93',
              fontSize: '14px',
            },
            value: {
              offsetY: props.semi ? -20 : 5,
              formatter: function (val: any) {
                return parseInt(val);
              },
              color: props.dark ? '#fff' : '#8E8E93',
              fontSize: '18px',
              show: true,
            },
          },
        },
      },
      colors:
        props.colors && props.colors.length > 0 ? props.colors : undefined,
      stroke: {
        lineCap: props.semi ? 'butt' : props.stokeLineCap,
      },
      fill: {
        type: 'gradient', //fill, gradient
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      labels: props.categories,
      legend: {
        show: props.showLegend,
        floating: props.legendFloating,
        fontSize: '16px',
        offsetX: props.legendOffsetX,
        offsetY: props.legendOffsetY,
        position: props.legendPosition, // whether to position legends in 1 of 4
        // direction - top, bottom, left, right
        horizontalAlign: 'center', // when position top/bottom, you can
        // specify whether to align legends
        // left, right or center
        verticalAlign: 'middle',
        labels: {
          colors: '#8E8E93',
          useSeriesColors: props.legendUseSeriesColors,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      dataLabels: {
        enabled: props.showDataLabels,
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
