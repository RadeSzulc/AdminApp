<template>
  <div id="skills">
    <table class="table table-striped table-hover" border="3px">
      <thead class="thead-dark">
        <tr>
          <th>
            Skill ID
          </th>
          <th>
            Name
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skill in skills">
          <td>{{ skill.id }}</td>
          <td>{{ skill.name }}</td>
          <td><button class="btn btn-danger btn-sm" @click="deleteClick(skill.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'skills',
    data() {
    return {
      skills: []
    }
  },

methods:{
    async refreshData(){
        await axios.get('https://localhost:5056/skills')
        .then((result)=>{
            this.skills=result.data;
        });

    },

    async deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        else{
        await axios.delete('https://localhost:5056/skills/'+id)
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