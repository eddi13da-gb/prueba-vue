 <template>
  <div class="tarjeta">
    <h2>Mi tarjeta</h2>

    <slot></slot>

  </div>
</template>

<script>
export default {}
</script>

<style>
.tarjeta{
  border:1px solid black;
  padding:20px;
  width:300px;
  margin:auto;
}
</style>