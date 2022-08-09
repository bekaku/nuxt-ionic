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
  markersSizes: {
    type: Array,
    default: () => [],
  },
  fillTypes: {
    type: Array,
    default: () => [],
  },
  fillImages: {
    type: Array,
    default: () => [],
  },
  fillImagesWidth: {
    type: Number,
    default: 40,
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
  const options = {
    series: props.series,
    chart: {
      type: 'line',
      height: props.height,
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: props.fillTypes,
      opacity: 1,
      image: {
        src: props.fillImages,
        width: props.fillImagesWidth,
        height: props.fillImagesWidth,
      },
    },
    markers: {
      size: props.markersSizes,
    },
    colors: props.colors,
    stroke: {
      width: 1,
    },
    grid: {
      // borderColor: props.dark ? '#353537' : '#e9ebec', //transparent
      position: 'back',
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
      y: {
        show: true,
        formatter: function (
          value: any,
          {
            /*series, seriesIndex, dataPointIndex, w*/
          }
        ) {
          return 'DE1 :' + value;
        },
      },
      x: {
        show: true,
        formatter: function (
          value: any,
          {
            /*series, seriesIndex, dataPointIndex, w*/
          }
        ) {
          return 'DE2 :' + value;
        },
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 4,
      tickAmount: 4,
      title: {
        text: 'DE2',
      },
    },
    yaxis: {
      type: 'numeric',
      min: 0,
      max: 4,
      tickAmount: 4,
      title: {
        text: 'DE1',
      },
    },
    annotations: {
      xaxis: [
        {
          x: 2,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: '',
          },
        },
      ],
      yaxis: [
        {
          y: 2,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: '',
          },
        },
      ],
    },
  };
  chart.value = new ApexCharts(
    document.querySelector('#' + props.chartId),
    options
  );
  chart.value.render();
};
</script>
