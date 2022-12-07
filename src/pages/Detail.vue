<template lang="">
    <div
        class="card"
        style="border: none; border-radius: 10px; box-shadow: 0 5px 10px grey">
        <h4 id="title">
            <!-- <b-button :to="{ name: 'home-screen' }" variant="light">
                <i class="bi bi-arrow-left"></i>
            </b-button> -->
            Detail Data
        </h4>
        <div class="card-body">
            <b-list-group>
                <b-list-group-item>
                    <b>Name:</b> {{ todo.name }}
                </b-list-group-item>
                <b-list-group-item>
                    <b>Description:</b> {{ todo.description }}
                </b-list-group-item>
                <b-list-group-item class="">
                    <b>Created at:</b> {{ todo.created_at }}
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>
<script>
import { db } from "@/firebaseDB";
export default {
    name: "detail-data",
    data() {
        return {
            catatan: [],
            todo: {
                name: "",
                description: "",
                created_at: "",
            },
        };
    },
    created() {
        let dbRef = db.collection("catatan").doc(this.$route.params.id);
        dbRef
            .get()
            .then((doc) => {
                this.todo = doc.data();
                console.log(this.todo);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>