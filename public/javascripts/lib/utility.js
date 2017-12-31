   function printBill (billingDataForPrint,columnsFromUI){
        var dd = {
            content: [
                { text: 'Bill Details', style: 'header' },
                table(billingDataForPrint, columnsFromUI)
            ]
        }
        pdfMake.createPdf(dd).open();
    }
   
   function table(data, columns) {
       return {
           table: {
               headerRows: 1,
               widths: [ '30%', '20%','20%', '15%', '15%' ],
               body: buildTableBody(data, columns)
           }
       };
   }
   
   function buildTableBody(data, columns) {
       var body = [];

       body.push([{text:"Type Name",fontSize: 17},{text:"Sub Type Name",fontSize: 17},
           {text:"Amount",fontSize: 17},{text:"Price",fontSize: 17},{text:"Price",fontSize: 17}]);

       data.forEach(function(row) {
           var dataRow = [];
           columns.forEach(function(column) {
               dataRow.push(row[column].toString());
           })
           body.push(dataRow);
       });

       var totalvalue=0;
       angular.forEach(data,function(data1){
           totalvalue += parseFloat(data1.finalamount);
       });
       body.push(['','','','Total:',{text:totalvalue.toFixed(2),fontSize: 19}]);

       return body;
   }
