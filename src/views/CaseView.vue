<template>
  <div class="about">
    
    <h1>This is an about page</h1>
    {{content}}
    {{markdown}}
    <p v-html="markdown"></p>
  </div>
</template>

<script lang="js">
import MarkdownIt from 'markdown-it'

export default ({
  components: {
   
  },
  data() {
    return {
      content: '# your markdown content &s <br/>  ## gzg'
    }
  },
  computed: {
    markdown() {
    const md = new MarkdownIt()
    const result = md.render(this.content)
    return result
  }
  }
})
</script>