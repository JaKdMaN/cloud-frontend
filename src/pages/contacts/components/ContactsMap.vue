<template>
  <yandex-map
    v-model="map"
    :settings="mapSettings"
    width="734px"
    height="415px"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    <yandex-map-marker
      :settings="markerSettings"
    >
      <div class="marker"/>
    </yandex-map-marker>
  </yandex-map>
</template>

<script setup lang="ts">
  //Core
  import { shallowRef, ref } from 'vue'
  import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapMarker } from 'vue-yandex-maps'

  //Types
  import { YMap } from '@yandex/ymaps3-types'
  import { YandexMapSettings } from 'vue-yandex-maps'
  import { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker'
  import { LngLat } from '@yandex/ymaps3-types/common/types'

  const map = shallowRef<null | YMap>(null)

  const coordinates: LngLat = [ 49.667322, 58.600299 ]

  const mapSettings = ref<YandexMapSettings>({
    location: {
      center: coordinates,
      zoom: 17,
    },
  })

  const markerSettings = ref<YMapMarkerProps>({
    coordinates: coordinates,
  })

</script>
<style scoped lang="scss">
  .marker {
    position: relative;
    width: 35px;
    height: 44px;

    &:after {
      position: absolute;
      top: -40px;
      left: -30px;
      content: url('src/assets/icons/yandex-maps-marker.svg');
    }
  }
</style>
