
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Ödeme</title>
<%@include file="ust.jsp" %>

<div class="container">
    
    <div class="row">
        <div id="content" class="col-sm-12">
            <h1>Shopping Cart </h1>
            <form action="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=checkout/cart/edit" method="post" enctype="multipart/form-data">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td class="text-center">Image</td>
                                <td class="text-left">Product Name</td>
                                <td class="text-left">Model</td>
                                <td class="text-left">Quantity</td>
                                <td class="text-right">Unit Price</td>
                                <td class="text-right">Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=48"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B10-74x74.jpg" alt="Cupim Bris" title="Cupim Bris" class="img-thumbnail"></a>
                                </td>
                                <td class="text-left"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=48">Cupim Bris</a></td>
                                <td class="text-left">product 20</td>
                                <td class="text-left">
                                    <div class="input-group btn-block" style="max-width: 150px;">
                                        <input type="text" name="quantity[805]" value="2" size="1" class="form-control quaility"><span class="input-group-btn"><button type="submit" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Update"><i class="fa fa-refresh"></i></button><button type="button" data-toggle="tooltip" title="" class="btn btn-danger" onclick="cart.remove('805');" data-original-title="Remove"><i class="fa fa-times-circle"></i></button></span></div>
                                </td>
                                <td class="text-right">$40.00</td>
                                <td class="text-right">$80.00</td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=52"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/W1-74x74.jpg" alt="Dail Lulpa" title="Dail Lulpa" class="img-thumbnail"></a>
                                </td>
                                <td class="text-left"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=52">Dail Lulpa</a></td>
                                <td class="text-left">watch</td>
                                <td class="text-left">
                                    <div class="input-group btn-block" style="max-width: 150px;">
                                        <input type="text" name="quantity[806]" value="1" size="1" class="form-control quaility"><span class="input-group-btn"><button type="submit" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Update"><i class="fa fa-refresh"></i></button><button type="button" data-toggle="tooltip" title="" class="btn btn-danger" onclick="cart.remove('806');" data-original-title="Remove"><i class="fa fa-times-circle"></i></button></span></div>
                                </td>
                                <td class="text-right">$78.00</td>
                                <td class="text-right">$78.00</td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=57"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/m1-74x74.jpg" alt="Cisi Chicken" title="Cisi Chicken" class="img-thumbnail"></a>
                                </td>
                                <td class="text-left"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=57">Cisi Chicken</a></td>
                                <td class="text-left">mama</td>
                                <td class="text-left">
                                    <div class="input-group btn-block" style="max-width: 150px;">
                                        <input type="text" name="quantity[807]" value="1" size="1" class="form-control quaility"><span class="input-group-btn"><button type="submit" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Update"><i class="fa fa-refresh"></i></button><button type="button" data-toggle="tooltip" title="" class="btn btn-danger" onclick="cart.remove('807');" data-original-title="Remove"><i class="fa fa-times-circle"></i></button></span></div>
                                </td>
                                <td class="text-right">$59.00</td>
                                <td class="text-right">$59.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
           
            <br>
            <div class="row">
                <div class="col-sm-4 col-sm-offset-8">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td class="text-right"><strong>Sub-Total:</strong></td>
                                <td class="text-right">$217.00</td>
                            </tr>
                            <tr>
                                <td class="text-right"><strong>Eco Tax (-2.00):</strong></td>
                                <td class="text-right">$4.00</td>
                            </tr>
                            <tr>
                                <td class="text-right"><strong>VAT (20%):</strong></td>
                                <td class="text-right">$16.00</td>
                            </tr>
                            <tr>
                                <td class="text-right"><strong>Total:</strong></td>
                                <td class="text-right">$237.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="buttons">
                <div class="pull-left"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=common/home" class="btn btn-default">Continue Shopping</a></div>
                <div class="pull-right"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=checkout/checkout" class="btn btn-primary">Checkout</a></div>
            </div>
        </div>
    </div>
</div>

<%@include file="alt.jsp" %>