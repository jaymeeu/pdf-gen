import React, { Fragment } from 'react'
import { Image, Text, View, Page, Document, StyleSheet } from '@react-pdf/renderer';
import logo from './Logo.png'

  const Invoice = () => {

    const reciept_data = {
        "id": "642be0b4bbe5d71a5341dfb1",
        "invoice_no": "20200669",
        "address": "739 Porter Avenue, Cade, Missouri, 1134",
        "date": "24-09-2019",
        "items": [
          {
            "id": 1,
            "desc": "do ex anim quis velit excepteur non",
            "qty": 8,
            "price": 179.25
          },
          {
            "id": 2,
            "desc": "incididunt cillum fugiat aliqua Lorem sit Lorem",
            "qty": 9,
            "price": 107.78
          },
          {
            "id": 3,
            "desc": "quis Lorem ad laboris proident aliqua laborum",
            "qty": 4,
            "price": 181.62
          },
          {
            "id": 4,
            "desc": "exercitation non do eu ea ullamco cillum",
            "qty": 4,
            "price": 604.55
          },
          {
            "id": 5,
            "desc": "ea nisi non excepteur irure Lorem voluptate",
            "qty": 6,
            "price": 687.08
          }
        ]
      }

    const styles = StyleSheet.create({
        page: {fontSize: 11,paddingTop: 20,paddingLeft: 40,paddingRight: 40,lineHeight: 1.5,flexDirection: 'column' },

        spaceBetween : {flex : 1,flexDirection: 'row',alignItems:'center',justifyContent:'space-between',color: "#3E3E3E" },

        titleContainer: {flexDirection: 'row',marginTop: 24},
        
        logo: { width: 90 },

        reportTitle: {  fontSize: 16,  textAlign: 'center' },

        addressTitle : {fontSize: 11,fontStyle: 'bold'}, 
        
        invoice : {fontWeight: 'bold',fontSize: 20},
        
        invoiceNumber : {fontSize: 11,fontWeight: 'bold'}, 
        
        address : { fontWeight: 400, fontSize: 10},
        
        theader : {marginTop : 20,fontSize : 10,fontStyle: 'bold',paddingTop: 4 ,paddingLeft: 7 ,flex:1,height:20,backgroundColor : '#DEDEDE',borderColor : 'whitesmoke',borderRightWidth:1,borderBottomWidth:1},

        theader2 : { flex:2, borderRightWidth:0, borderBottomWidth:1},

        tbody:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1, borderColor : 'whitesmoke', borderRightWidth:1, borderBottomWidth:1},

        total:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1.5, borderColor : 'whitesmoke', borderBottomWidth:1},

        tbody2:{ flex:2, borderRightWidth:1, }
        
    });

    const InvoiceTitle = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <Image style={styles.logo} src={logo} />
                <Text style={styles.reportTitle}>Xpress Enterprises</Text>
            </View>
        </View>
    );

    const Address = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View>
                    <Text style={styles.invoice}>Invoice </Text>
                    <Text style={styles.invoiceNumber}>Invoice number: {reciept_data.invoice_no} </Text>
                </View>
                <View>
                    <Text style={styles.addressTitle}>7, Ademola Odede, </Text>
                    <Text style={styles.addressTitle}>Ikeja,</Text>
                    <Text style={styles.addressTitle}>Lagos, Nigeria.</Text>
                </View>
            </View>
        </View>
    );

    const UserAddress = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View style={{maxWidth : 200}}>
                    <Text style={styles.addressTitle}>Bill to </Text>
                    <Text style={styles.address}>
                        {reciept_data.address}
                    </Text>
                </View>
                <Text style={styles.addressTitle}>{reciept_data.date}</Text>
            </View>
        </View>
    );


    const TableHead = () => (
        <View style={{ width:'100%', flexDirection :'row', marginTop:10}}>
            <View style={[styles.theader, styles.theader2]}>
                <Text >Items</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Price</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Qty</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Amount</Text>   
            </View>
        </View>
    );


    const TableBody = () => (
       reciept_data.items.map((receipt)=>(
        <Fragment key={receipt.id}>
            <View style={{ width:'100%', flexDirection :'row'}}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text >{receipt.desc}</Text>   
                </View>
                <View style={styles.tbody}>
                    <Text>{receipt.price} </Text>   
                </View>
                <View style={styles.tbody}>
                    <Text>{receipt.qty}</Text>   
                </View>
                <View style={styles.tbody}>
                    <Text>{(receipt.price * receipt.qty).toFixed(2)}</Text>   
                </View>
            </View>
        </Fragment>
       ))
    );

    const TableTotal = () => (
        <View style={{ width:'100%', flexDirection :'row'}}>
            <View style={styles.total}>
                <Text></Text>   
            </View>
            <View style={styles.total}>
                <Text> </Text>   
            </View>
            <View style={styles.tbody}>
                <Text>Total</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>
                    {reciept_data.items.reduce((sum, item)=> sum + (item.price * item.qty), 0)}
                </Text>  
            </View>
        </View>
    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InvoiceTitle  />
                <Address/>
                <UserAddress/>
                <TableHead/>
                <TableBody/>
                <TableTotal/>
            </Page>
        </Document>
          
    )
}

export default Invoice