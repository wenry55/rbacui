<template>
  <v-container id="regular-tables-view" fluid tag="section">
    <view-intro :heading="title" link="components/simple-tables" />

    <material-card
      icon="mdi-clipboard-text"
      icon-small
      title="역할(Role) 목록"
      color="accent"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">ID</th>
            <th class="primary--text">Name</th>
            <th class="primary--text">Created</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="role in roles" :key="role.id">
            <td>{{ role.id }}</td>
            <td>{{ role.name }}</td>
            <td>{{ role.created }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>

    <div class="py-3" />
    <v-row>
      <v-col> <user-list /> </v-col
      ><v-col>
        <resource-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserList from "@/views/UserList.vue";
import ResourceList from "@/views/ResourceList.vue";

export default {
  name: "RoleList",
  components: {
    UserList,
    ResourceList,
  },
  props: {
    title: {
      type: String,
      default: "Role List",
    },
  },
  data() {
    return {
      roles: [
        { id: "admin", name: "관리자", created: "2021-12-12T06:42:00" },
        { id: "developer", name: "개발자", created: "2021-12-12T06:42:00" },
        { id: "user", name: "사용자", created: "2021-12-12T06:42:00" },
        { id: "analyzer", name: "분석가", created: "2021-12-12T06:42:00" },
      ],
    };
  },
};
</script>
