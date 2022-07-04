 <template>
 <div>
 <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">MUGA</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
        <b-nav-item to="/announcements">Announcements</b-nav-item>
        <b-nav-item to="/skills">Skills</b-nav-item>
        <b-nav-item to="/users">Users</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </div>
</template>