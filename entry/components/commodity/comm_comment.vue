<template>
    <div class="comment">
            <div class="comment_header">
                <a href="javascript:void(0);">
                    <span>用户评价(<i v-text="this.$store.state.goodsinfo.view_content.commentView.commentView.detail.comments_total"></i>)</span>
                    <span><em v-text="this.$store.state.goodsinfo.view_content.commentView.commentView.detail.satisfy_per+'%'"></em>满意 ></span>
                </a>
            </div>
            <div class="comment_con">
                <div class="items_header">
                    <img :src="this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].user_avatar" alt="" class="user_header">
                    <div class="user">
                        <p class="p1" v-text="this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].user_name"></p>
                        <p class="p2" v-text="this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].reply_time"></p>
                    </div>
                    <div class="verylike"><p>超爱</p></div>
                </div>
                <div class="items_con">
                    <div class="con_text" v-text="this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].comment_content"></div>
                    <div class="con_img">
                        <img v-for="img in this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].comment_full_images" :src="img" @click="gogallery(img)" alt="">
                    </div>
                </div>
                <div class="comment_comment">
                    <div>
                        <div class="gf"></div>
                        <div><span class="gfc">官方回复:</span><span v-html="this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].reply_content"></span></div>
                    </div>
                    <div v-for="item in this.$store.state.goodsinfo.view_content.commentView.commentView.list[0].user_replys">
                        <div class="nogf" :style="{backgroundImage:'url('+item.user_avatar+')'}"></div>
                        <div><span class="nogfc" v-html="item.user_name+':'"></span><span v-html="item.reply_content"></span></div>
                    </div>
                </div>
            </div>
            <div class="weui-gallery" @click="deletegallery" :style="{display:this.bool?'block':'none'}">
              <span class="weui-gallery__img" :style="'background-image: url('+this.gallery+');'"></span>
          </div>
        </div>
</template>
<script>
export default {
  data() {
    return {
      gallery: "",
      bool: false
    };
  },
  methods: {
    deletegallery() {
      this.bool = false;
    },
    gogallery(img){
      this.gallery=img;
      this.bool = true;
      //console.log(img)
    }
  }
};
</script>
<style lang="less" scoped>
.comment {
  padding: 0 0 0.08rem 0;
  .comment_con {
    .comment_comment {
      margin: 0 0.1rem;
      background: #f6f6f6;
      padding: 0.08rem;
      .nogfc {
        color: #333;
        margin-right: 0.03rem;
      }
      .nogf {
        float: left;
        width: 0.16rem;
        height: 0.16rem;
        overflow: hidden;
        border-radius: 100%;
        margin-right: 0.05rem;
        position: relative;
        top: 0.02rem;
        background-repeat: no-repeat;
        background-position: left top;
        background-size: cover;
      }
      .gfc {
        color: #ff6700;
        margin-right: 0.03rem;
      }
      .gf {
        float: left;
        width: 0.16rem;
        height: 0.16rem;
        overflow: hidden;
        border-radius: 100%;
        margin-right: 0.05rem;
        position: relative;
        top: 0.02rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRUMyRjcwNEMyMDAxMUUzQkFFRkExMTA4OEE1OENCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MjYwOTVGNDMxM0MxMUU2QTBEMkEzQ0UzRDdFRTg0OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MjYwOTVGMzMxM0MxMUU2QTBEMkEzQ0UzRDdFRTg0OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdiMGM5NDhlLWY1Y2QtNDYzMC04YTM5LTg2ZjNlODM3MzBkZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRUMyRjcwNEMyMDAxMUUzQkFFRkExMTA4OEE1OENCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgNhWhQAAAEBSURBVHja7No/CsIwFMfxV/EPOogoCF09grM4egJBBXcXd8+gs4uLix08g6MHEE+gm50cHBxKh6qjELFIikn4/sa2kH7yktcM9ZI4krEvziQIvWRQF7eSE+cCCRIkSJAgQYIECRIkSJAg2Zt82ge3Vz0DxpHcb3I6ymL0y4jDhnlVKpSk1pR27/XG67NzC69S1VZ8s/aSbpUZ7WFzcY703GB/6HjKpOg/b5mupNNX35rvZda1sErLycdZ8Fs2L7zDTnGxWLaZ9PUjy4FIa3vQd4qhSpAgQYIECRIkSJAgQYKUefgfDxIkSJAgQYIECRIkSJAgQYKULSkInQIF4UOAAQB6DygXvkzJdAAAAABJRU5ErkJggg==)
          no-repeat left top;
        background-size: cover;
      }
    }
    .items_con {
      padding: 0.1rem;
      font-size: 0.14rem;
      .con_img {
        text-align: center;
        justify-content: space-around;
        img {
          width: 40%;
          margin: 0.1rem 0.05rem;
        }
      }
    }
    .items_header {
      display: flex;
      height: 0.4rem;
      justify-content: space-between;
      padding: 0.02rem 0.1rem;
      img {
        width: 0.4rem;
        height: auto;
        border-radius: 100%;
      }
      .user {
        width: 64%;
        .p2 {
          margin-top: 0.01rem;
          color: rgba(0, 0, 0, 0.54);
        }
      }
      .verylike {
        background: url("../../images/commodity/like.png") no-repeat;
        background-size: auto 100%;
        width: 0.5rem;
        height: 0.18rem;
        line-height: 0.18rem;
        color: #ff6700;
        padding-left: 0.2rem;
        position: relative;
        top: 0.1rem;
      }
    }
  }
  margin-top: 0.08rem;
  background: #fff;
  .comment_header {
    a {
      display: flex;
      justify-content: space-between;
      padding: 0.16rem 0;
      margin: 0 0.16rem;
      font-size: 0.12rem;
      span {
        color: rgba(0, 0, 0, 0.54);
        em {
          color: #ff6700;
        }
      }
    }
  }
}
em,
i {
  font-style: normal;
}
</style>

