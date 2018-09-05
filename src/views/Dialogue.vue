<template>
    <div>
        <v-app>
            <v-toolbar app></v-toolbar>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-bottom-nav
                    :active.sync="bottomNav"
                    :value="true"
                    absolute
                    color="transparent"
            >
                <v-btn
                        color="teal"
                        flat
                        value="dialogue"
                >
                    <span>对话</span>
                    <v-icon>icon-bubble</v-icon>
                </v-btn>

                <v-btn
                        color="teal"
                        flat
                        value="communication"
                >
                    <span>通讯录</span>
                    <v-icon>icon-icon-test</v-icon>
                </v-btn>

                <v-btn
                        color="teal"
                        flat
                        value="information"
                >
                    <span>咨询流</span>
                    <v-icon>icon-xinwen</v-icon>
                </v-btn>
                <v-btn
                        color="teal"
                        flat
                        value="collection"
                >
                    <span>收藏</span>
                    <v-icon>icon-shoucang</v-icon>
                </v-btn>
                <v-btn
                        color="teal"
                        flat
                        value="center"
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
	  name: '',
	  mixins: [],
	  watch: {},
	  computed: {},
	  data() {
	    return {
	      bottomNav: 'dialogue'
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
