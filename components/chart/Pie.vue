<template>
  <div class="q-qa-sm">
    <div :id="chartId"></div>
  </div>
</template>
<script setup lang="ts">
/*
 <chart-pie
        chart-id="statistic-ewon"
        type="donut"
        :series="series"
        :labels="['nodata', 'normal', 'risk', 'problem']"
        height="250"
        :colors="['#95A5A6', '#23D160', '#FF9F43', '#FF3860']"
      />
*/
import { PropType } from 'vue';
import { PieChartType, ChartMode, ChartThemePalete } from '@/types/chart';
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
  type: {
    type: String as PropType<PieChartType>,
    default: 'pie', //pie, donut
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
    type: Array as PropType<number[]>,
    default: () => [],
  },
  colors: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  labels: {
    type: Array as PropType<string[]>,
    default: () => [],
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
      },
      theme: {
        mode: props.mode,
        palette: props.palette,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 0,
          },
          donut: {
            size: '60%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '12px',
                // fontFamily: "Helvetica, Arial, sans-serif",
                color: '#778699',
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                color: undefined,
                offsetY: 16,
                formatter: function (val: any) {
                  return val;
                },
              },
              total: {
                show: true,
                label: t('base.all') + props.labelunit,
                color: '#008bf2',
                formatter: function (w: any) {
                  return w.globals.seriesTotals.reduce((a: any, b: any) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      labels: props.labels,
      colors: props.colors,
      stroke: {
        // dashArray: 2
      },
      fill: {
        type: 'gradient', //solid, gradient
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
      legend: {
        show: props.showLegend,
        position: 'bottom', // whether to position legends in 1 of 4
        // direction - top, bottom, left, right
        horizontalAlign: 'center', // when position top/bottom, you can
        // specify whether to align legends
        // left, right or center
        verticalAlign: 'middle',
        labels: {
          colors: '#8E8E93',
          useSeriesColors: true,
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
