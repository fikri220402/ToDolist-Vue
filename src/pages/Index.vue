<template>
    <b-card header-bg-variant="light" style="border: none; border-radius: 10px; box-shadow: 0 5px 10px grey" background-color="#000000">
        <!-- <b-button
      :to="{ name: 'add-data' }"
      variant="success"
      class="mt-3 col-2 ml-4">
      <i class="bi bi-clipboard-plus-fill"></i> Tambah
    </b-button> -->
        <b-card-body>
            <b-input-group>
                <b-input-group-prepend class="mt-1 ml-5" style="margin-right: -80px">
                    <span><i class="bi bi-search"></i></span>
                </b-input-group-prepend>
                <b-form-input class="form-control col-10 mx-auto" style="border-radius: 10px; background-color: #f5cb42; color: #2e2e2d;" type="search"
                    v-model="searchQuery" placeholder="Search name"></b-form-input>
            </b-input-group>
        </b-card-body>

        <b-card-body>
            <!-- <b-table hover light :fields="field" :items="resultQuery" show-empty>
        <template v-slot:cell(index)="row">
          <p class="text-center">
            {{ row.index + 1 }}
          </p>
        </template>
        <template v-slot:cell(action)="row">
          <router-link
            :to="{ name: 'detail-data', params: { id: row.item.key } }"
            id="actionic">
            <i class="bi bi-eye-fill"></i>
          </router-link>
          <router-link
            :to="{ name: 'edit-data', params: { id: row.item.key } }"
            id="actionic">
            <i class="bi bi-pencil-fill"></i> edit
          </router-link>

          <button @click="deleteData(row.item.key)" id="actionic">
            <i class="bi bi-trash-fill"></i> delete
          </button>
        </template>
      </b-table> -->
            <b-card-group>
                <b-card-body v-for="row in resultQuery" :key="row.key">
                    <b-card style="
              border: none;
              background-color: #f5cb42;
              color: #2e2e2d;
              border-radius: 10px;
              box-shadow: 0 3px 0 3px gray;
            ">
                        <b-card-title>
                            <div class="float-left">
                                <small><b>
                                        <h4>{{ row.name }}</h4>
                                    </b></small>
                            </div>
                            <div class="float-right">
                                <router-link :to="{ name: 'detail-data', params: { id: row.key } }" class="btn btn-primary mr-3">
                                    Detail
                                </router-link>
                                <router-link :to="{ name: 'edit-data', params: { id: row.key } }" class="btn btn-warning mr-3" color="white">
                                    Edit
                                </router-link>

                                <button @click="deleteData(row.key)" class="btn btn-danger mr-3">
                                    Delete
                                </button>
                            </div>
                        </b-card-title>
                        <div class="float-left container text-justify">
                            <b-card-body>
                                {{ row.description }}
                                <br>
                                {{ row.created_at }}
                            </b-card-body>
                        </div>
                        <small class="text-muted float-right">Created {{ row.name }} at {{row.created_at}}</small>
                    </b-card>
                </b-card-body>
            </b-card-group>
        </b-card-body>
    </b-card>
</template>

<script>
import { db } from "../firebaseDB";
export default {
    name: "home-screen",
    data() {
        return {
            catatan: [],
            todo: {
                name: "",
                description: "",
                created_at: "",
            },
            nameState: null,
            descriptionState: null,
            created_atState: null,

            searchQuery: null,
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        deleteData(id) {
            if (window.confirm("Yakin ingin hapus?")) {
                db.collection("catatan")
                    .doc(id)
                    .delete()
                    .then(() => {
                        this.makeToast("danger");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        loadData() {
            db.collection("catatan").onSnapshot((snapshotChange) => {
                this.catatan = [];
                snapshotChange.forEach((doc) => {
                    this.catatan.push({
                        key: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        created_at: doc.data().created_at,
                    });
                });
            });
        },
        makeToast(variant = null) {
            this.$bvToast.toast("Data deleted", {
                title: `Delete Catatan`,
                variant: variant,
                solid: true,
            });
        },
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.catatan.filter((item) => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every((v) => item.name.toLowerCase().includes(v));
                });
            } else {
                return this.catatan;
            }
        },
    },
};
</script>