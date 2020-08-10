<template>
  <div>
      <div class="bg-gray-400 py-5 pl-24">
          <h1 class="text-4xl text-left text-blue-400">
              <i class="fas fa-bars"></i>
          </h1>
      </div>
      <div class="bg-gray-300 py-5 px-24">
          <h1 class="text-4xl text-left text-gray-700 font-bold">
              Papa John's, by Islam Gad
          </h1>
          <div class="bg-white p-6 rounded shadow-lg mt-8">
              <table class="table-fixed w-full text-gray-700">
                  <thead>
                      <tr class="border-b-4 border-gray text-xl">
                          <th class="w-1/3 px-4 py-2 text-left">
                              Order Items
                          </th>
                          <th class="w-1/3 px-4 py-2">
                              Price
                          </th>
                          <th class="w-1/3 px-4 py-2">
                              Quantity
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="border-b-4 border-gray text-lg" v-for="item in order_items" v-bind:key="item.id">
                          <td class="border px-4 py-4 border-none text-left">
                              {{item.name}}
                          </td>
                          <td class="border px-4 py-4 border-none text-center">
                              {{item.price}} EGP
                          </td>
                          <td class="border px-4 py-4 border-none text-center">
                              <button class="rounded-full rounded-r-none py-2 px-5 bg-blue-400" type="button" @click="decrement(item)">
                                  <i class="fas fa-minus text-white font-bold"></i>
                              </button>
                              <span class="px-5 py-2 border-2 m-2">
                                  {{item.quantity}}
                              </span>
                              <button class="rounded-full rounded-l-none py-2 px-5 bg-blue-400" type="button" @click="increment(item)">
                                  <i class="fas fa-plus text-white font-bold"></i>
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',

    data () {
        return {
            order_items: null
        }
    },

    mounted() {
        this.getOrder();
    },

    methods: {
        getOrder() {
            this.$axios.get('http://foodie.aqarmap.net/api/orders/122')
                .then(response => {
                    this.order_items = response.data.order_items
                })
                .catch(error => console.log(error))
        },
        increment(item) {
            this.$axios.post(`http://foodie.aqarmap.net/api/orders/122/items/${item.id}?user_id=2`)
                .then(response => {
                    this.getOrder();
                })
                .catch(error => console.log(error))
        },
        decrement(item) {
            this.$axios.delete(`http://foodie.aqarmap.net/api/orders/122/items/${item.id}?user_id=2`)
                .then(response => {
                    this.getOrder();
                })
                .catch(error => console.log(error))
        }
    }
  
}
</script>
