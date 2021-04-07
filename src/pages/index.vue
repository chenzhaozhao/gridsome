<template>
  <Layout>
    <h4 class="mx-auto w-1/2 mt-20 mb-5">
      {{ $page.theme.title}}
    </h4>
    <h5 class="mx-auto w-1/2 mb-20">
      {{ $page.theme.des }}
    </h5>
    <g-link
      v-for="img in $page.allProject.edges"
      :key="img.node.id"
      class="w-3/4 mx-auto"
      :to="'/project/' + img.node.id"
    >
      <g-image
        class="mx-auto mb-5 image w-1/2"
        :src="require(`../../static/${img.node.url}.jpg`)"
      />
      <div  class="mx-auto mb-5 image w-1/2">{{ img.node.name }}</div>
      <div  class="mx-auto mb-5 image w-1/2">{{ img.node.category }} {{ img.color }}</div>
    </g-link>
    <div class="flex mx-auto w-2/3">
      <g-link
        :to="'/journal/' + item.node.num"
        v-for="item in $page.allJournal.edges"
        :key="item.node.name"
        class="flex-1 border border-gray-200 align-middle text-center"
        >{{ item.node.name }}</g-link
      >
    </div>
  </Layout>
</template>
<page-query>
query{
theme(id:"1"){
  title
  des
}
allProject{
  edges{
    node{
      name
      url
      id
      category
    }
  }
}
allJournal{
  edges{
    node{
     id
      name
      num
    }
  }
}
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
<style>
.home-links a {
  margin-right: 1rem;
}
</style>
