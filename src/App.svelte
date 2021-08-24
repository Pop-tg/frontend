<script lang="ts">
  import { GithubOne, SendEmail, PeopleTopCard } from '@icon-park/svg'
  import Panel from './components/Panel.svelte'

  const svgInit = { size: '2rem', fill: '#4c4c4c' }
</script>

<div class="links">
  <a class="icon" href="https://github.com/Pop-tg/main"
    >{@html GithubOne(svgInit)}</a
  >
  <a class="icon" href="mailto:gm@miao.dev">{@html SendEmail(svgInit)}</a>
  <a class="icon" href="https://miao.dev">{@html PeopleTopCard(svgInit)}</a>
</div>

<Panel />

<style>
  .links {
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 1rem;
    line-height: normal;
    display: flex;
    flex-direction: column;
    z-index: 5000;
  }

  .links a {
    margin-top: 1rem;
    cursor: pointer;
    display: block;
  }
</style>
