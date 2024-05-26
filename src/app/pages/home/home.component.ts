import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(PdfViewerComponent) pdfViewer?: PdfViewerComponent;
  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  pdfSrc = "https://ff5b493d1e2cd2b86ff4453605612cbc2630083860a6a39a02c1955-apidata.googleusercontent.com/download/storage/v1/b/resultados-e8e80.appspot.com/o/documentos%2FTabla%2029%20art%C3%8Dculos%20SCOPUS%20-%20WEB%20OF%20SCIENCE.pdf?jk=ASOpP9jZF2RJ7ERLfKH6iR6o7oj6_9W9ywkHB6fZTrtBMgFUOeqdpo0srgzbfOSFBeeFzQnWmxj0i6cbCJwv2BsJ2SH6AWhUrBqvxlJjhlQWdngLShpWOzwKRKHN5-93hc_X-gslhnSs8lh9PYH7t7nf9VcWKoAk2esTDBl0BzaWDb-d9IZiupKkvHsKkVvED65dJrlFu-c_tuz5XOqNwf1XsMiyN30RXRTjj0R-GZU9bU0xg034OwSmq-CRwEvX9rCp16rRnA6_5_wMcUtpfBFqTinkmU4IMES2vqYaPUXsl-DGsQwfdzWs1PpjuHruxAjW_Gh7fX1csglnSbfrzGH4TUHKjb98F48DHqv42WVvRLlUT9BOJcukSg6sTpblQBeeZVQy5WNpkQXoxM0CMbSTP1ar7ciQt0nXFULluc2jBv3mLQLNO2DW4PYS2y3XHBcbNf9FQkzuehuj2gc6EDwt1kCuBivXfj1iB3hVPJ_hWBELSDFj5gnfP0Myd5J5eKhNnFHXncjLBhULsLm3yTMe2FyfcExWzaEZn2DpCczfgtwSMQ2BaiQqDSRKLQhDSSWYx4as2FPCPko00yvdC94o-0szH_EjCFYXFozBp-4jE27EcBpt_ohzFvCsn1jugGa7cEw9p6R0vnUrXY-q5AC4YSx9VfmJyoW_vTWFhyfkjSa4G6RZevxUM7A1f4YCrO3xWLh2icl_BfuIlmDps6tSdq7YtCBsEjeOH8fNCt6jx8893hnZVaRjt5862Hnse0iJBPrnQU80d-71l9WzjfGRPgz8FXMzDSDxg9-g7ezs8BUV6Qy8nKi_A4sdrg36X2aSTbr7uoG7RjURGRMBFjnr8KtICrCewElEFAAgG-7g3X2kZYgEzD51b4sMkC2dwP2ncJRNJzuLIj7JDoHEjx0grZL7aKtd2U5014wxvGhZDFSmJz-yv5S2B3C8BHjQYZGAdwJJg8HDEmQC8U-M3O4qUZRXQfF47JobU6DvFZdEpLNSpNG2M6VXuTfKinHrUn2PCMI31qsy9OxYpDaJ9SwkHKGFkkWpaWEijokw6APSNmfR-uzc4y6gvoOTjwcLc6s7kfa9lGaLYVU_Pxp9BKK0ZQ673-nCEEVZ_PRQTeiEL8Bbq-BFx4_IDIGmnqA-Ha5gpZA34FjCPhwl68LZzGIfeFrQkhOLnEOw2Af8BtaXY_D1rFqWMqI-mn1urbHxnFWBmFjvretkITrx1Z-7E8dAGAwpRDv07UHUcCRnoOD1JEyufYFQ3tH66UCWS4iik9BpSj73UvMAnZI3WEQroOlZ-PFq_E41ypWjLZvc&isca=1"
  // pdfSrc = "https://github.com/rickardaniel/resultados/blob/master/doc1.pdf";
  response: boolean = false;
  page=1;
  afterLoadComplete(pdf: any) {
    this.response = true;
  }

  onPreviousClic(){
    if(this.page>1){
      this.page--;
    }
    this.pdfViewer?.pdfViewer.pagesCount;
  }
  onNextClic(){
    if(this.pdfViewer && this.pdfViewer?.pdfViewer.pagesCount >this.page){
      this.page++;
    }
    ;
  }
}
