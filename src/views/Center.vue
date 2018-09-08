<template>
    <div>
        <v-app>
            <v-toolbar app>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-toolbar-title>{{$route.name}}</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <v-container
                        fluid
                        grid-list-lg
                >
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card color="white" class="black--text">
                                <v-card-actions>
                                    <img src="../assets/img/head.jpeg"
                                         style="border-radius: 50%"
                                         height="55px"
                                         width="55px">
                                    <div class="ml-2">
                                        <p class="body-2 mb-0">{{$store.state.account.nickname}}</p>
                                        <p class="body-1 mb-0 grey--text">{{$store.state.account.mood}}</p>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon color="#C4C4C4">keyboard_arrow_right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card color="white" class="white--text">
                                <v-card-actions>
                                    <v-btn flat class="subheading font-weight-regular">账号与安全</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon color="#C4C4C4">keyboard_arrow_right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-btn flat class="subheading font-weight-regular">通知与管理</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon color="#C4C4C4">keyboard_arrow_right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-btn flat class="subheading font-weight-regular">聊天与管理</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon color="#C4C4C4">keyboard_arrow_right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>

                        <v-flex xs12>
                            <v-card color="white" class="white--text">
                                <v-card-actions>
                                    <v-btn flat class="subheading font-weight-regular">设置</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon color="#C4C4C4">keyboard_arrow_right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>

                        <v-flex xs12>
                            <v-card color="white" class="white--text">
                                <v-card-actions>
                                    <v-btn flat class="subheading font-weight-regular">我的主页</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn icon to="/home">
                                        <v-icon color="#C4C4C4">keyboard_arrow_right</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-content>
            <v-bottom-nav
                    active.sync="center"
                    :value="true"
                    absolute
                    color="transparent"
                    app
            >
                <v-btn
                        color="teal"
                        flat
                        value="dialogue"
                        to="/"
                >
                    <span>对话</span>
                    <v-icon>icon-bubble</v-icon>
                </v-btn>

                <v-btn
                        color="teal"
                        flat
                        value="communication"
                        to="/communication"
                >
                    <span>通讯录</span>
                    <v-icon>icon-icon-test</v-icon>
                </v-btn>

                <v-btn
                        color="teal"
                        flat
                        value="information"
                        to="/information"
                >
                    <span>咨询流</span>
                    <v-icon>icon-xinwen</v-icon>
                </v-btn>
                <v-btn
                        color="teal"
                        flat
                        value="collection"
                        to="/collection"
                >
                    <span>收藏</span>
                    <v-icon>icon-shoucang</v-icon>
                </v-btn>
                <v-btn
                        color="teal"
                        flat
                        value="center"
                        to="/center"
                >
                    <span>个人中心</span>
                    <v-icon>icon-gerenzhongxin</v-icon>
                </v-btn>
            </v-bottom-nav>
        </v-app>
    </div>
</template>

<script>
	export default {
	  name: 'dialogue',
	  mixins: [],
	  watch: {},
	  computed: {},
	  data() {
	    return {};
	  },
	  created() {
	  },
	  mounted() {
	  },
	  methods: {}
	};
</script>

<style scoped>

</style>
