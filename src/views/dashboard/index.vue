<template>
  <div class="dashboard-container">
    <div class="clearfix">
      <pan-thumb :image="avatar" style="float: left;z-index: 200">
        <img class="pan-thumb-info" :src="emptyGif">
      </pan-thumb>

      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">{{ title }}</span>
      </div>

      <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />
    </div>
    <img :src="emptyGif" class="emptyGif">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from 'components/PanThumb'
import GithubCorner from 'components/GithubCorner'
import defaultSettings from '@/settings'

export default {
  name: 'Dashboard',

  components: { PanThumb, GithubCorner },

  data() {
    return {
      title: defaultSettings.title,
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  },

  computed: {
    ...mapGetters([
      'avatar',
      'name'
    ])
  }
}
</script>

<style scoped lang="scss">
  .dashboard-container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 50px 60px 0 60px;
    width: 100%;
    height: 100%;
    background-color: #e3e3e3;

    .pan-thumb-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 70%;
      height: auto;
    }

    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      z-index: 100;

      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }

    .emptyGif {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 45%;
      height: auto;
    }
  }
</style>
