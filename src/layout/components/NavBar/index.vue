<template>
  <div class="nav-bar">
    <hamburger
      class="hamburger-container"
      :is-active="sidebar.opened"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <search class="right-menu-item" />

        <error-log class="errLog-container right-menu-item hover-effect" />

        <screen-full class="right-menu-item hover-effect" />

        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select
            class="right-menu-item hover-effect"
          />
        </el-tooltip>
      </template>

      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">

          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>

          <el-dropdown-item>
            <span @click="handlePassword">修改密码</span>
          </el-dropdown-item>

          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退 出</span>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>

      <change-password ref="changePassword" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from 'components/Hamburger'
import Breadcrumb from 'components/Breadcrumb'
import Search from 'components/HeaderSearch'
import ErrorLog from 'components/ErrorLog'
import ScreenFull from 'components/ScreenFull'
import SizeSelect from 'components/SizeSelect'
import ChangePassword from './ChangePassword/index.vue'

export default {
  name: 'NavBar',

  components: { Hamburger, Breadcrumb, Search, ErrorLog, ScreenFull, SizeSelect, ChangePassword },

  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'avatar'
    ])
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },

    // 退出
    async logout() {
      await this.$store.dispatch('user/resetToken')
      this.$router.push(`/login?redirect=${ this.$route.fullPath }`)
    },

    // 修改密码
    handlePassword() {
      this.$refs.changePassword.handleDialogData()
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: relative;
    height: 50px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
      float: left;
      height: 46px;
      line-height: 46px;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, .025);
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        vertical-align: text-bottom;
        font-size: 18px;
        color: #5A5E66;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
