import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import {NgForm} from '@angular/forms';
import { Product } from 'src/app/models/product';
import * as jsPDF from 'jspdf';



declare var M: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductService) { }
  ignore = false;
  filename: File;

  ngOnInit() {
    this.get();
  }

  cargarImagen(image : any){
    this.filename = image.target.files[0];
   }
 

  add(form: NgForm){
    if(form.value._id) {
      this.productService.put(form.value, this.filename)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.get();
      })
    }else{
      this.productService.post(form.value, this.filename)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.get();
      });  
    }
  }

  get(){
    this.productService.get()
    .subscribe(res => {
    this.productService.products = res as Product[];
    console.log(res);
    });
  }

  edit(product: Product){
    this.productService.selectedProduct = product;
  }

  delete(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.productService.delete(_id)
      .subscribe(res => {
        this.get();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }

      generarPDF(){
        var id = document.getElementById("tabproducts");
        var pdf = new jsPDF({
          orientation: 'landscape',
          unit:'pt',
          format:'carta'
        });
          // Se asignan más propiedades al PDF
          pdf.setDrawColor("#444444");
          pdf.setFont("arial", "italic");
          pdf.setFontSize(25);    
          pdf.text("Productos", 360, 30,{ align: "center", width: 500} )
          pdf.setFontSize(13);    
          pdf.text("La Bella Lola", 600, 85, {align: "left"})     
          pdf.text("Dolores Hidalgo", 600, 105, { align: "left" })
          pdf.fromHTML(id,165,150,{align: "center",width: 500} );     
          pdf.setDrawColor(255, 0, 0);
          pdf.line(750, 50, 100, 50);  
          
          var img = new Image();
          img.src="/assets/img/logo2.png";
          pdf.addImage(img, 'png', 90, 65);
          pdf.save("Materia-Prima.pdf");
          pdf.line(600, 100, 200, 100);
          pdf.addPage('a3', 'portrait');
          this.ignore = false;
        
        
      }
    
    }