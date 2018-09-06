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
                <v-container fluid>
                    <v-card height="70px">
                        <v-container
                                align-center="true"
                                justify-start="true"
                                d-flex="true">
                            <v-avatar size="36px">
                                <img
                                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                        alt="Avatar"
                                >
                            </v-avatar>
                            <div class="d-flex">
                                <div>1</div>
                                <div>2</div>
                            </div>
                        </v-container>
                    </v-card>
                </v-container>
            </v-content>
            <v-bottom-nav
                    active.sync="center"
                    :value="true"
                    absolute
                    color="transparent"
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
	    return {
	    };
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
