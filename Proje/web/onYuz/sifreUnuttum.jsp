<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Şifremi Unuttum</title>
<%@include file="ust.jsp" %>

<div class="container">
    
    <div class="row">
        <div id="content" class="col-sm-12">
            <h1>Şifrenizi mi Unuttunuz?</h1>
            <p>Hesabınız ile bağlantılı E-mail adresinizi girerek , hesabınıza gelen link ile şifrenizi yenileyebilirsiniz.</p>
            <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                <fieldset>
                    <legend>E-Mail Adresiniz</legend>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-email">E-Mail : </label>
                        <div class="col-sm-10">
                            <input type="text" name="email" value="" placeholder="E-Mail Adresiniz" id="input-email" class="form-control">
                        </div>
                    </div>
                </fieldset>
                <div class="buttons clearfix">
                    <div class="pull-left"><a href="giris.jsp" class="btn btn-default">Geri</a></div>
                    <div class="pull-right">
                        <input type="submit" value="Devam" class="btn btn-primary">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<%@include file="alt.jsp" %>