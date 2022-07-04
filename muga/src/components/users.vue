<template>
  <div id="users">
    <table class="table table-striped" border="3px">
      <thead>
        <tr>
          <th>
            User ID
          </th>
          <th>
            Name
          </th>
          <th>
            Surname
          </th>
          <th>
            Email
          </th>
          <th>
            Gender
          </th>
          <th>
            Birthdate
          </th>
          <th>
            Has passport
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.userid }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.birthDate | formatBirthDate }}</td>
          <td>{{ user.hasPassport }}</td>
          <td><button class="btn btn-danger btn-sm" @click="deleteClick(user.userid)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'users',
    data() {
    return {
      users: []
    }
  },

methods:{
    async refreshData(){
        await axios.get('https://localhost:5056/users')
        .then((result)=>{
            this.users=result.data;
        });

    },

    async deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        else{
        await axios.delete('https://localhost:5056/users/'+id)
        .then(()=>{
            this.refreshData();
        });
    }
    },
},
mounted:function(){
    this.refreshData();
}

}


  
</script>