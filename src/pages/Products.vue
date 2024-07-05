<template>
    <q-page class="q-pa-md">
      <div class="q-pa-md bg-white">
        <q-input 
          filled 
          v-model="searchQuery" 
          placeholder="Buscar productos..." 
          class="q-mb-md" 
          debounce="300" 
          @input="filterProducts"
          prepend-inner-icon="search"
        />
  
        <div class="row q-col-gutter-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-select
              filled
              v-model="selectedPriceRange"
              :options="priceRanges"
              label="Filtrar por precio"
              @update:model-value="filterProducts"
              class="q-mb-md"
            />
          </div>
        </div>
      </div>
  
      <div class="row q-col-gutter-md q-mt-md">
        <div v-for="product in filteredProducts" :key="product.id" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="bg-red-3 text-white">
            <q-img :src="product.image" alt="product.name" class="q-img-cover" />
            <q-card-section>
              <div class="text-h6">{{ product.name }}</div>
              <div class="text-subtitle1">S/ {{ product.price }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'ProductsPage',
    data() {
      return {
        searchQuery: '',
        selectedPriceRange: null,
        priceRanges: [
          { label: 'Todos', value: null },
          { label: '0 - 1000', value: [0, 1000] },
          { label: '1000 - 2000', value: [1000, 2000] },
          { label: '2000 - 3000', value: [2000, 3000] },
          { label: '3000 - 4000', value: [3000, 4000] }
        ],
        products: [
          { id: 1, name: 'Macbook Air 29', price: 3500.0, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg' },
          { id: 2, name: 'Iphone 15', price: 4500.0, image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg' },
          { id: 3, name: 'Headphones', price: 500.0, image: 'https://www.peru-smart.com/wp-content/uploads/2023/08/AUDI071PLATA.jpg' },
          { id: 4, name: 'Apple Watch SE', price: 1200.0, image: 'https://mac-center.com.pe/cdn/shop/files/Apple_Watch_SE_GPS_40mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_2023_Position-1__COES_92441560-9279-42aa-a5f5-959c2329fe5c.jpg?v=1695120970' },
          { id: 5, name: 'Camera Sony', price: 3000.0, image: 'https://d1abyhu02s963u.cloudfront.net//wp-content/uploads/2022/05/Sony-a7-IV-Mirrorless-Camera-con-Lente-28-70mm-.jpg' },
          { id: 6, name: 'iPad M2', price: 1800.0, image: 'https://s1.eestatic.com/2022/02/28/elandroidelibre/moviles-android/653694755_222253800_1706x1063.jpg' }
        ],
        filteredProducts: []
      }
    },
    mounted() {
      this.filterProducts();
    },
    methods: {
      filterProducts() {
        let filtered = this.products;
  
        if (this.searchQuery) {
          filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        if (this.selectedPriceRange && this.selectedPriceRange.value) {
          const [min, max] = this.selectedPriceRange.value;
          filtered = filtered.filter(product => product.price >= min && product.price <= max);
        }
  
        this.filteredProducts = filtered;
      }
    },
    watch: {
      searchQuery() {
        this.filterProducts();
      },
      selectedPriceRange() {
        this.filterProducts();
      }
    }
  }
  </script>
  
  <style scoped>
  .q-img-cover {
    height: 200px;
  }
  
  .bg-red-3 {
    background-color: #EF5350 !important;
  }
  </style>
  