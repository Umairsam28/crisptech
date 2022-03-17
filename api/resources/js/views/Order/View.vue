<template>
  <v-card class="mx-auto" outlined elevation="2" :loading="loading">
    <v-card-title
      >Invoice #<b>{{ invoice.id }}</b></v-card-title
    >
    <v-card-text>
      <v-row align="center">
        <v-col cols="4">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Order Status:
                <OrderStatus :order_status="invoice.order_status" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-hover v-slot="{ hover }">
                <v-list-item-title class="text-h6">
                  Date:
                  <b v-if="hover">{{ invoice.created_date_formatted_us }}</b>
                  <b v-else>{{ invoice.created_date_formatted }}</b>
                </v-list-item-title>
              </v-hover>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <v-text-field
                  v-model="tracking_id"
                  :append-icon="'mdi-truck-cargo-container'"
                  :append-outer-icon="tracking_id ? 'mdi-send' : ''"
                  filled
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Tracking ID"
                  type="text"
                  @click:append-outer="sendTrackingCode"
                ></v-text-field>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4">
          <v-toolbar
            color="pink"
            dark
          >
            <v-toolbar-title>Shipping Detail</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-account </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  >{{ invoice.shipping_first_name }}
                  {{ invoice.shipping_last_name }}</v-list-item-title
                >
                <v-list-item-subtitle>Full Name</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  invoice.shipping_phone
                }}</v-list-item-title>
                <v-list-item-subtitle>Mobile/Lan line</v-list-item-subtitle>
              </v-list-item-content>
              <!-- <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon> -->
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  invoice.shipping_email
                }}</v-list-item-title>
                <v-list-item-subtitle>Order Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>ali_connors@example.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> -->
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  invoice.shipping_address
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >{{ invoice.scity.name }}, {{ invoice.sstate.name }}
                  {{ invoice.shipping_zip }}<br />
                  {{ invoice.scountry.name }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="4">
          <v-toolbar
            color="red"
            dark
          >
            <v-toolbar-title>Billing Detail</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-account </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  >{{ invoice.billing_first_name }}
                  {{ invoice.billing_last_name }}</v-list-item-title
                >
                <v-list-item-subtitle>Full Name</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  invoice.billing_phone
                }}</v-list-item-title>
                <v-list-item-subtitle>Mobile/Lan line</v-list-item-subtitle>
              </v-list-item-content>
              <!-- <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon> -->
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  invoice.billing_email
                }}</v-list-item-title>
                <v-list-item-subtitle>Order Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>ali_connors@example.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> -->
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  invoice.billing_address
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >{{ invoice.bcity.name }}, {{ invoice.bstate.name }}
                  {{ invoice.billing_zip }}<br />
                  {{ invoice.bcountry.name }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12">
          <v-sheet
            v-for="i in 5"
            :key="i"
            v-show="loading"
            :color="`grey lighten-4`"
          >
            <v-skeleton-loader
              class="mx-auto"
              type="list-item"
            ></v-skeleton-loader>
          </v-sheet>
          <v-simple-table v-show="!loading">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Product</th>
                  <th class="text-left">Qty</th>
                  <th class="text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in invoice.products" :key="item.id">
                  <td>{{ item.product?item.product.sku:'N/A' }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>$ {{ item.rowtotal }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-col
          cols="4"
          sm="4"
          offset="8"
          class="pb-0"
        >
        <v-card>
            <v-toolbar
              flat
              color="blue-grey"
              dark
            >
              <v-toolbar-title>Total</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-text-field
                filled
                label="Sub Total"
                readonly
                :value="(invoice.subtotal)"
              ></v-text-field>
              <v-text-field
                filled
                label="Discount"
                type="number"
                step="any"
                readonly
                v-model.number="invoice.discount_amount"
              ></v-text-field>
              <v-text-field
                filled
                label="Tax"
                type="number"
                step="any"
                readonly
                v-model.number="invoice.tax_amount"
              ></v-text-field>
              <v-text-field
                filled
                label="Total"
                readonly
                :value="invoice.total"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import defaultservice from "@services/auth/default";
import OrderStatus from "@/components/orders/status.vue";
const service = new defaultservice("orders");
export default {
  async mounted() {
    this.invoice = await service.get(this.$route.params.id).then((e) => {
      this.loading = false;
      return e;
    });
  },
  data() {
    return {
      invoice: {},
      loading: true,
      tracking_id: "",
    };
  },
  components: {
    OrderStatus,
  },
  methods: {
    sendTrackingCode() {
      alert("her");
    },
  },
};
</script>