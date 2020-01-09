/*
|--------------------------------------------------------------------------
| Config - Master Fields
|--------------------------------------------------------------------------
*/

function add_config_field_section_element(id){
    return '\
<div class="section__configRowContainer top-border" id="field-'+ id + '" data-id="'+ id +'">\
    <div class="section__configRow">\
        <div class="section__config--btnContainer delete">\
            <a href="#" class="button" onclick="onClick_Field_DelSectionElement(this)">マスターフィールドを削除</a>\
        </div>\
    </div>\
    <div class="section__configRow">\
        <div class="section__configCol label">\
            <p>マスターフィールドタイプ<i class="required">*</i></p>\
        </div>\
        <div class="section__configCol short">\
            <select name="field-'+ id +'[type]" onChange="onChange_Fields_TypeSelection(this)">\
                <option value="" selected>選択してください</option>\
                <option value="text" selected="true">TEXT</option>\
                <option value="email">EMAIL</option>\
                <option value="radio">RADIO</option>\
                <option value="checkbox">CHECKBOX</option>\
                <option value="select">SELECTION</option>\
                <option value="textarea">TEXTAREA</option>\
            </select>\
        </div>\
    </div>\
    <div class="section__configRow">\
        <div class="section__configCol label">\
            <p>マスタフィールド名<i class="required">*</i></p>\
        </div>\
        <div class="section__configCol txtfld">\
            <input type="text" name="field-'+ id +'[name]">\
        </div>\
    </div>\
    <div class="section__configRow labels">\
        <div class="section__configCol label">\
            <p>フィールドマスター</p>\
        </div>\
        <div class="section__configCol txtfld">\
            <input type="text" name="field-'+ id+ '[label]">\
        </div>\
    </div>\
    <div class="section__configRow selections hide">\
        <div class="section__configCol label">\
            <p>選択肢<i class="required">*</i></p>\
        </div>\
        <div class="section__configCol label">\
            <input type="text" name="field-'+ id+ '[options][]">\
        </div>\
        <div class="section__configCol txtadd"><a href="javascript:void(0);" onclick="onClick_Field_Option_AddTxtElement(this)">\
            <p>+</p></a>\
        </div>\
        <div class="section__configCol txtdel"><a href="javascript:void(0);" onclick="onClick_Field_Option_DelTxtElement(this)">\
            <p>-</p></a>\
        </div>\
    </div>\
</div>';
}

function onClick_Field_AddSectionElement(){
    var row = $('#config-field .section__configRowContainer');
    if(row.length == 1){
        row.first().find('.section__config--btnContainer').removeClass('hide');
    }

    var dataID = row.last().data('id')
    rowNum = dataID + 1;
    $(add_config_field_section_element(rowNum)).insertAfter(row.last());
}

function onClick_Field_DelSectionElement(e){
    $(e).closest('.section__configRowContainer').remove();
    var rowContainer = $('#config-field .section__configRowContainer');
    var row = $('.section__configRowContainer');
    if(rowContainer.length == 1){
        row.first().find('.section__config--btnContainer').addClass('hide');
    }
    row.first().removeClass('top-border');
}

function loadFieldSection() {
    var section = $('#config-field .section__configRowContainer');
    section.first().find('.delete').addClass('hide');
    section.first().removeClass('top-border');
}

function add_config_field_option_section_element(id){
    return '\
<div class="section__configRow selections">\
    <div class="section__configCol label">\
        <p>選択肢</p>\
    </div>\
    <div class="section__configCol label">\
        <input type="text" name="'+ id +'[options][]">\
    </div>\
    <div class="section__configCol txtadd"><a href="javascript:void(0);" onclick="onClick_Field_Option_AddTxtElement(this)">\
        <p>+</p></a>\
    </div>\
    <div class="section__configCol txtdel"><a href="javascript:void(0);" onclick="onClick_Field_Option_DelTxtElement(this)">\
        <p>-</p></a>\
    </div>\
</div>';
}


function onClick_Field_Option_AddTxtElement(e){
    var rowContainerID = $(e).closest('.section__configRowContainer').attr('id');
    var row = $(e).closest('.selections');
    if(row.length == 1){
        row.first().find('.txtdel').removeClass('hide');
    }

    $(e).closest('.txtadd').addClass('hide');
    $(add_config_field_option_section_element(rowContainerID)).insertAfter(row.last());
}

function onClick_Field_Option_DelTxtElement(e){
    var rowContainerID = $(e).closest('.section__configRowContainer').attr('id');
    $(e).closest('.selections').remove();
    var row = $('#'+rowContainerID+' .selections');
    if(row.length == 1){
        $(row).first().find('.txtdel').addClass('hide');
        $(row).first().find('.txtadd').removeClass('hide');
    }else{
        $(row).last().find('.txtadd').removeClass('hide');
    }
}

function onChange_Fields_TypeSelection(e){
    var selection = $(e).closest('.section__configRowContainer').find('.selections');
    var label = $(e).closest('.section__configRowContainer').find('.labels');

    switch(e.value){
        case 'radio':
        case 'checkbox':
        case 'select':
            selection.removeClass('hide');
            label.addClass('hide');
        break;
        default:
            selection.addClass('hide');
            label.removeClass('hide');
        break;
    }
    loadFieldOptions(e);
}

function loadFieldOptions(e) {
    var section = $(e).closest('.section__configRowContainer').find('.selections');
    if(section.length > 1){
        section.find('.txtadd').addClass('hide');
        section.last().find('.txtadd').removeClass('hide');
    }else{
        section.find('.txtdel').addClass('hide');
    }
}

/*
|--------------------------------------------------------------------------
| Config - User Functionalities
|--------------------------------------------------------------------------
*/

function add_config_user_section_element(id){
    return '\
<div class="section__configRowContainer" data-id="'+ id +'">\
    <div class="section__configRow">\
        <div class="section__configCol label">\
            <p>フィールド名<i class="required">*</i></p>\
        </div>\
        <div class="section__configCol txtfld">\
            <input type="text" name="User-'+ id +'[field]">\
        </div>\
        <div class="section__configCol txtadd"><a href="javascript:void(0);" onclick="onClick_User_AddSectionElement(this)">\
            <p>+</p></a>\
        </div>\
        <div class="section__configCol txtdel"><a href="javascript:void(0);" onclick="onClick_User_DelSectionElement(this)">\
            <p>-</p></a>\
        </div>\
    </div>\
    <div class="section__configRow">\
        <div class="custom__radioBtnbox">\
            <label>\
                <input type="radio" name="User-'+ id +'[is_encrypted]" value="0" checked>\
                <span class="btn"></span>\
                <p>ワード</p>\
            </label>\
        </div>\
        <div class="custom__radioBtnbox">\
            <label>\
                <input type="radio" name="User-'+ id +'[is_encrypted]" value="1">\
                <span class="btn"></span>\
                <p>暗号化</p>\
            </label>\
        </div>\
    </div>\
</div>';
}

function onClick_User_AddSectionElement(e){
    var row = $('#config-userlink .section__configRowContainer');
    if(row.length == 1){
        row.first().find('.txtdel').removeClass('hide');
    }

    $(e).closest('.txtadd').addClass('hide');
    var dataID = $(e).closest('.section__configRowContainer').data('id')
    rowNum = dataID + 1;
    $(add_config_user_section_element(rowNum)).insertAfter(row.last());
}

function onClick_User_DelSectionElement(e){
    $(e).closest('.section__configRowContainer').remove();
    var rowContainer = $('#config-userlink .section__configRowContainer');

    if(rowContainer.length == 1){
        $(rowContainer).first().find('.txtdel').addClass('hide');
        $(rowContainer).first().find('.txtadd').removeClass('hide');
    }else{
        $(rowContainer).last().find('.txtadd').removeClass('hide');
    }
}

function loadUserSection() {
    var section = $('#config-userlink .section__configRowContainer');

    if(section.length > 1){
        section.find('.txtadd').addClass('hide');
        section.last().find('.txtadd').removeClass('hide');
    }else{
        section.find('.txtdel').addClass('hide');
    }
}

/*
|--------------------------------------------------------------------------
| Config - Security
|--------------------------------------------------------------------------
*/

function add_config_security_section_element(id){
    return '\
<div class="section__configRowContainer" data-id="'+id+'">\
    <div class="section__configRow">\
        <div class="section__configCol label">\
            <p>フィールド名</p>\
        </div>\
        <div class="section__configCol txtfld">\
            <input type="text" name="ip[]">\
        </div>\
        <div class="section__configCol txtadd">\
            <a href="javascript:void(0);" onclick="onClick_IP_AddTxtElement(this)">\
                <p>+</p>\
            </a>\
        </div>\
        <div class="section__configCol txtdel">\
            <a href="javascript:void(0);" onclick="onClick_IP_DelTxtElement(this)">\
                <p>-</p>\
            </a>\
        </div>\
    </div>\
</div>';
}

function loadIPRestrictions() {
    var section = $('#config-security .section__configRowContainer .section__configRow');

    if(section.length > 1){
        section.find('.txtadd').addClass('hide');
        section.last().find('.txtadd').removeClass('hide');
    }else{
        section.find('.txtdel').addClass('hide');
    }
}

function onClick_IP_AddTxtElement(e){
    var row = $('#config-security .section__configRowContainer');
    if(row.length == 1){
        $(row).first().find('.txtdel').removeClass('hide');
    }

    $(e).closest('.txtadd').addClass('hide');
    var dataID = $(e).closest('.section__configRowContainer').data('id')
    rowNum = dataID + 1;
    $(add_config_security_section_element(rowNum)).insertAfter(row.last());
}

function onClick_IP_DelTxtElement(e){
    $(e).closest('.section__configRowContainer').remove();
    var rowContainer = $('#config-security .section__configRowContainer');

    if(rowContainer.length == 1){
        $(rowContainer).first().find('.txtdel').addClass('hide');
        $(rowContainer).first().find('.txtadd').removeClass('hide');
    }else{
        $(rowContainer).last().find('.txtadd').removeClass('hide');
    }
}

/*
|--------------------------------------------------------------------------
| Config - Navigtion
|--------------------------------------------------------------------------
*/

function configCategory() {
	if ($(".js-configNav").length) {
        var hash = window.location.hash;
        switch(hash){
            case '#campaign' :
                $('#configNav-details').addClass('active');
                $('#config-details').addClass('active');
                $('#config-details').addClass('visible');
            ;
            break;
            case '#fieldmaster' :
                $('#configNav-field').addClass('active');
                $('#config-field').addClass('active');
				$('#config-field').addClass('visible');
            ;
            break;
            case '#members' :
                $('#configNav-userlink').addClass('active');
                $('#config-userlink').addClass('active');
				$('#config-userlink').addClass('visible');
            ;
            break;
            case '#security' :
                $('#configNav-security').addClass('active');
                $('#config-security').addClass('active');
				$('#config-security').addClass('visible');
            ;
            break;
            default:
                $('#configNav-details').addClass('active');
                $('#config-details').addClass('active');
				$('#config-details').addClass('visible');
            ;
            break;
        };

		$('.configNav__item').click(function () {
			$('.configNav .td .configNav__item').removeClass('active');
			$(this).addClass('active');
			$('.section__config').removeClass('active');
			$('.section__config').removeClass('visible');
		    var configcat = $(this).attr("id");
	    	if(configcat=="configNav-details") {
				$('#config-details').addClass('active');
				$('#config-details').addClass('visible');
			}
	    	if(configcat=="configNav-field") {
				$('#config-field').addClass('active');
				$('#config-field').addClass('visible')
			}
	    	if(configcat=="configNav-userlink") {
				$('#config-userlink').addClass('active');
				$('#config-userlink').addClass('visible')
			}
	    	if(configcat=="configNav-security") {
				$('#config-security').addClass('active');
				$('#config-security').addClass('visible')
			}
		});
	}
}

$(function(){
    configCategory();
    loadFieldSection();
    loadUserSection();
    loadIPRestrictions();
});

