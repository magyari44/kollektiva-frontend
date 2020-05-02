<template>
    <section class="picture-upload mb-2">
      <label>{{label}}</label>
      <div class="picture-upload__element" v-for="(attachment, index) in attachments" :key="attachment.value">
<!--        <div class="picture-upload__element-remove btn btn-primary" @click="removeAttachment(index)">-</div>-->
        <input class="picture-upload__element-input" @change="handlePicture(index)" ref="attachment" type="file"
               name="picture-upload-input" accept=".jpg, .png">
      </div>
<!--      <div class="picture-upload__element-add btn btn-primary"-->
<!--           v-bind:class="(attachments.length === parseInt(maxPictureCount)) ? 'picture-upload__element&#45;&#45;disabled' : ''"-->
<!--           @click="addAttachment">+-->
<!--      </div>-->
    </section>
</template>

<script>
  export default {
    name: "FileUpload",
    props: {
      label: {
        type: String,
        default: "Kép"
      },
      maxPictureCount: {
        type: String,
        default: '1'
      }
    },
    data() {
      return {
        attachmentsCount: 0,
        attachments: [{
          class: '',
          value: ''
        }],
      };
    },
    methods: {
      addAttachment() {
        if (parseInt(this.props.maxPictureCount) === this.attachments.length + 1) {
          this.attachments.push({
            class: 'picture-upload__element--disabled',
            value: ''
          })
        } else {
          this.attachments.push({
            class: '',
            value: ''
          })
        }
      },
      removeAttachment(index) {

        this.$delete(this.attachments, index);
      },
      removeAllAttachments() {
        this.attachments = [{
          class: '',
          value: ''
        }];
      },
      handlePicture(index) {
        this.attachments[index].value = this.$refs.attachment[index].files;
        this.attachmentsCount++;
        let attachedFiles = this.attachments.map(function (attachment) {
          if (attachment.value && attachment.value.length > 0) {
            return attachment.value[0];
          } else {
            return null;
          }
        });
        this.$emit('change', attachedFiles);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .file-upload {
  &__element-remove,
  &__element-add {
     -webkit-appearance: none;
     padding: 0;
     border: 0;
     background-color: #00a8e1;
     height: 22px;
     width: 22px;
     color: #ffffff;
   }

  &__element {
     display: flex;
     margin-bottom: 10px;
   }

  &__element-remove {
     margin-right: 10px;
   }

  &__element--disabled {
     pointer-events: none;
   }

  &__element-remove.file-upload__element--disabled,
  &__element-add.file-upload__element--disabled {
     background-color: #cdcdcd !important;
   }
  }

</style>
