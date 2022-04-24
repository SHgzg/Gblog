
<template>
  <div class="box">
    <div class="box-item">
        <p class="title">HTML</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
    <div class="box-item">
        <p class="title">Css</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
    <div  class="box-item ">
        <p class="title">JavaScript</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
    <div class="box-item">
        <p class="title">Vue</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
     <div class="box-item">
        <p class="title">Webpack</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
     <div class="box-item">
        <p class="title">Git</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
     <div class="box-item">
        <p class="title">Ajax|axios</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
     <div class="box-item">
        <p class="title">Node</p>
        <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
body {
background: #f192dd;
}
.box {
margin: 100px auto;
width: 70%;
background-color:  #2a9ead;

}
.box .box-item {
border-bottom: 1px solid #666;
color: #eee;
}
.box .title {
    font-size: 40px;
margin: 0;
padding: 10px;
background-color: #2a9ead;
}
.box-item-content{
height: 0;
overflow: hidden;
background-color: rgb(54, 49, 49);
margin: 0;
padding-left: 20px;
transition: 0.5s;
}
ul{
list-style: none;
}
ul li{
padding-top: 5px;
}
.box:hover .box-item:hover .box-item-content {
height: 100px;
}

  </style>
