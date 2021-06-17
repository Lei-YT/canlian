<template>
  <page >
    <van-image
      width="100"
      height="100"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
      :style="{ marginTop: '20px' }"
    />
    <p>ccccccccccc</p>
    <van-form :model="loginForm" :label-width="80" class="loginform">
      <van-field
        v-model="loginForm.phone"
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="loginForm.captcha"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" plain type="primary">
            发送验证码
          </van-button>
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        name="pickArea"
        :value="cityData"
        label="所在地区"
        @click="showCity = true"
      >
        <template #extra>
          <van-button size="small" plain type="default">
            请选择
            <van-icon name="arrow" />
          </van-button>
        </template>
      </van-field>
      <van-popup
        v-model="showCity"
        position="bottom"
        :style="{ height: '50%' }"
      >
        <van-area
          title=""
          :area-list="district"
          @confirm="receiveArea"
          @cancel="showCity = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="pickCoor"
        :value="coorSelected"
        label="选择协会"
        @click="showCoor = true"
      >
        <template #extra>
          <van-button size="small" plain type="default">
            请选择
            <van-icon name="arrow" />
          </van-button>
        </template>
      </van-field>
      <van-popup
        v-model="showCoor"
        position="bottom"
        :style="{ height: '50%' }"
      >
        <van-picker
          title=""
          show-toolbar
          :columns="coorData"
          @confirm="receiveCoor"
          @cancel="showCoor = false"
        />
      </van-popup>
      <van-row type="flex" justify="center" class="form-action">
        <van-col span="20">
          <van-button type="primary" class="bg-primary-dark" block
            >登录</van-button
          >
        </van-col>
      </van-row>
    </van-form>
  </page>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  // props: [],
  components: {},
  data() {
    return {
      phone: "",
      captcha: "",
      loginForm: {
        phone: "",
        captcha: "",
      },
      showCity: false,
      cityData: "",
      district: areaList,
      showCoor: false,
      coorSelected: "",
      coorData: ["协会1", "协会2"],
    };
  },
  methods: {
    receiveArea(ret) {
      this.cityData = ret.map((c) => c.name).join(" ");
      this.showCity = false;
    },
    receiveCoor(ret) {
      this.coorSelected = ret;
      this.showCoor = false;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ * {
  font-size: 16px;
}
/deep/.loginform {
  margin: 3em 0;
}
/deep/.form-action {
  margin-top: 0.5rem;
}
</style>
