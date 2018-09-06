<template>
    <div>
        <v-app id="inspire">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm8 md4>
                            <v-card class="elevation-12">
                                <v-toolbar dark color="primary">
                                    <v-toolbar-title>{{$route.name}}</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon to="/register">
                                        <v-icon>arrow_forward</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                                prepend-icon="person"
                                                clearable
                                                name="username"
                                                placeholder="用户名"
                                                hint="11位手机号码"
                                                :rules="[rules.required, rules.username]"
                                                type="number"
                                                v-model="username"></v-text-field>
                                        <v-text-field
                                                prepend-icon="lock"
                                                :append-outer-icon="show ? 'visibility_off' : 'visibility'"
                                                clearable
                                                :type="show ? 'number' : 'password'"
                                                name="password"
                                                placeholder="密码"
                                                hint="6位数字"
                                                :rules="[rules.required, rules.password]"
                                                id="password"
                                                v-model="password"
                                                @click:append-outer="show = !show"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click="login">登陆</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
	export default {
	  name: 'Login',
	  props: {
	    source: String
	  },
	  mixins: [],
	  watch: {},
	  computed: {},
	  data() {
	    return {
	      username: '',
	      password: '',
	      show: false,
	      rules: {
	        required: value => !!value || 'Required.',
	        password: v => v.length === 6 || '6位数字',
	        username: v => v.length === 11 || '11位手机号码'
	      }
	    };
	  },
	  created() {
	  },
	  mounted() {
	  },
	  methods: {
      }
	};
</script>

<style scoped>

</style>
