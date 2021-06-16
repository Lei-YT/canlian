<template>
  <page class="page">
    <Avatar shape="square" icon="ios-person" size="large" />
    <p>ccccccccccc</p>
    <CellGroup class="loginform">
      <Form :model="loginForm" :label-width="80">
        <FormItem label="手机号">
          <Input
            v-model="loginForm.phone"
            :border="false"
            placeholder="请输入验证码"
          ></Input>
        </FormItem>
        <FormItem label="验证码">
          <Row :wrap="false">
            <Col flex="auto">
              <Input
                v-model="loginForm.captcha"
                :border="false"
                placeholder="请输入验证码"
              ></Input>
            </Col>
            <Col style="text-align: center">
              <Divider type="vertical" />
            </Col>
            <Col>
              <Button type="text" class="text-primary">发送验证码</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="所在地区">
          <Row :wrap="false">
            <Col flex="auto">
              <Input
                :border="false"
                readonly
                v-model="cityData"
                @click.native="showCity = true"
              ></Input>
            </Col>
            <Col>
              <span v-if="!cityData">请选择</span>
              <Icon type="ios-arrow-forward" />
            </Col>
          </Row>
        </FormItem>
        <FormItem label="选择协会">
          <Row :wrap="false">
            <Col flex="auto">
              <Input
                :border="false"
                readonly
                v-model="coorSelected"
                @click.native="showCoor = true"
              ></Input>
            </Col>
            <Col>
              <span v-if="!coorSelected">请选择</span>
              <Icon type="ios-arrow-forward" />
            </Col>
          </Row>
        </FormItem>
        <Row type="flex" justify="center" class="form-action">
          <Col span="16">
          <Button class="bg-primary-dark" long size="large" >登录</Button>
        </Col>
        </Row>
      </Form>
    </CellGroup>
    <yd-cityselect
      v-model="showCity"
      :callback="result1"
      :items="district"
    ></yd-cityselect>
    <yd-actionsheet
      :items="coorData"
      v-model="showCoor"
      cancel="取消"
    ></yd-actionsheet>
  </page>
</template>

<script>
import District from "ydui-district/dist/gov_province_city_area_id";
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
      district: District,
      showCoor: false,
      coorSelected: '',
      coorData: [
        {
          label: "协会1",
          callback: () => {
            this.coorSelected = "协会1";
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          },
        },
        {
          label: "协会2",
          callback: () => {
            this.coorSelected = "协会2";
          },
        },
      ],
    };
  },
  methods: {
    result1(ret) {
      this.cityData = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ * {
  font-size: 16px;
}
.ivu-divider,
.ivu-divider-vertical {
  height: 1.5em;
}
/deep/.yd-scrollview {
  padding: 1rem 0;
}
/deep/.loginform {
  margin: 3em 0;
}
/deep/.ivu-form {
  margin-top: 1rem;
  position: relative;
}
/deep/.ivu-form::before {
  top: 0;
}
// /deep/.ivu-form::after {
/deep/.ivu-form-item:last-child::after {
  bottom: 9px;
}
/deep/.ivu-form::before,
// /deep/.ivu-form::after,
/deep/.ivu-form-item:not(:last-child):after {
  height: 1px;
  position: absolute;
  z-index: 10;
  left: 0;
  content: "";
  width: 100%;
  background-image: linear-gradient(0deg, #ececec 50%, transparent 0);
}
/deep/.ivu-form-item {
  padding: 1em;
  position: relative;
  margin-bottom: 0;
}
/deep/.ivu-form-item:not(:last-child):after {
  margin-left: 1.25em;
  font-size: inherit;
  bottom: 2px;
  visibility: visible;
  display: block;
}
/deep/.form-action{
  margin-top: .5rem;
}
</style>
