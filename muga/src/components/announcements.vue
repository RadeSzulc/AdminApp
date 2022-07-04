<template>
  <div id="announcements">
    <table class="table table-striped" border="3px" style="{background.color: 'grey'}">
      <thead background:color-green>
        <tr>
          <th variant="secondary">
            Announcement ID
          </th>
          <th>
            Phone number
          </th>
          <th>
            Created at
          </th>
          <th>
            Description
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="announcement in announcements">
          <td>{{ announcement.announcementid }}</td>
          <td>{{ announcement.phoneNumber }}</td>
          <td>{{ announcement.dateCreated | formatDate}}</td>
          <td>{{ announcement.description }}</td>
          <td><button class="btn btn-danger btn-sm" @click="deleteClick(announcement.announcementid)">Delete</button></td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'announcements',
    data() {
    return {
      announcements: []
    }
  },

methods:{
    async refreshData(){
        await axios.get('https://localhost:5056/announcements')
        .then((result)=>{
            this.announcements=result.data;
        });

    },

    async deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        else{
        await axios.delete('https://localhost:5056/announcements/'+id)
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