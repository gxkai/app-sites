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
                            <v-carousel>
                                <v-carousel-item
                                        v-for="(item,i) in items"
                                        :key="i"
                                        :src="item.src"
                                ></v-carousel-item>
                            </v-carousel>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-content>
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
	      items: [
	        {
	          src: require('@/assets/img/carousel_1.jpeg')
	        },
	        { src: require('@/assets/img/carousel_2.jpeg')
	        }
	      ]
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
