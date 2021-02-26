<template>
   <div class="id-card" align="left">
   <b-row>
      <b-col>
         <b-avatar rounded src="https://placekitten.com/300/300" size="40px"></b-avatar>
         <div class="id-name">
            <h5>ADRIAN</h5>
            <h5>GONZALEZ</h5>
         </div>
         <b-row class="id-info">
            <b-col>
               <b>Estado País</b>
               <p> NL, MX </p>
               <b>Genera Factura</b>
               <p> Si </p>

            </b-col>
            <b-col>
               <b>Miembro Desde</b>
               <p> Enero 2021 </p>
               <b>Último Proyecto</b>
               <p> Enero 2021 </p>
            </b-col>
         </b-row>

      </b-col>
      <b-col>
         <p>Like | Star | Share</p>
         <div class="contact-card">
            <h5>CONTÁCTAME</h5>
            <p>8181-181-8181</p>
            <p>adrian@gmail.com</p>
            <p>www.portafolios.com.mx</p>

         </div>
      </b-col>
   </b-row>

   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.id-card {
   border-radius: 11px;
   padding: 15px;
   background-color: #f8f8f8 !important;
   width: 100%;
   min-width: 350px;
   width: 510px;
   max-width: 510px !important;
   border: 0px !important;
   -webkit-box-shadow: 8px 8px 12px 0px rgba(16,15,15,0.16);
   -moz-box-shadow: 8px 8px 12px 0px rgba(16,15,15,0.16);
   box-shadow: 8px 8px 12px 0px rgba(16,15,15,0.16);
}
.id-card .b-avatar {
   margin: 4px 10px 0px 0px;
   float: left;
}
.id-card h5 {
   margin: 0px;
}
.id-card p, .id-card b{
   font-size: 14px;
   margin: 0px;
}
.id-card .contact-card {
   float: right;
   border-radius: 11px;
   padding: 15px;
   background-color: #f8f8f8 !important;
   width: 100%;
   min-width: 100px;
   max-width: 200px !important;
   border: 0px !important;
   -webkit-box-shadow: 8px 8px 12px 0px rgba(16,15,15,0.16);
   -moz-box-shadow: 8px 8px 12px 0px rgba(16,15,15,0.16);
   box-shadow: 8px 8px 12px 0px rgba(16,15,15,0.16);
}
.id-info .col {
   padding-right: 0px;
}

</style>
