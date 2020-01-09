function add_question_section(id){
    return '\
<div class="section question" data-id="'+ id +'">\
    <div class="section__row">\
        <p class="section__label title">\
            設問タイトルがこちらに入ります\
        </p>\
        <div class="buttonContainer">\
            <a href="javascript:void(0);"><span class="toggleArrow" onclick="onClick_questionToggle(this)"></span></a>\
            <a href="javascript:void(0);"><span class="closeBtn" onclick="onClick_Questions_DelSection(this)"></span></a>\
        </div>\
    </div>\
    <div class="section__content">\
        <div class="section__content--table">\
            <div class="tr questionField">\
                <div class="th">設問<i class="required">*</i></div>\
                <div class="td">\
                    <textarea name="questions[question-'+ id +'][question]"></textarea>\
                </div>\
            </div>\
            <div class="tr">\
                <div class="th">タイプ<i class="required">*</i></div>\
                <div class="td">\
                    <select class="select--type" name="questions[question-'+ id +'][type]" onChange="onChange_Fields_TypeSelection(this)">\
                        <option data-fieldtype="" value="選択してください" selected disabled>選択してください</option>\
                        <option data-fieldtype="text" value="text">TEXT</option>\
                        <option data-fieldtype="email" value="email">EMAIL</option>\
                        <option data-fieldtype="textarea" value="textarea">TEXTAREA</option>\
                        <option data-fieldtype="radiobutton" value="radio">RADIO</option>\
                        <option data-fieldtype="select" value="select">SELECTION</option>\
                        <option data-fieldtype="checkbox" value="checkbox">CHECKBOX</option>\
                    </select>\
                </div>\
            </div>\
            <div class="tr questiontypeField">\
                <div class="th">タイプ<i class="required">*</i></div>\
                <div class="td">\
                    <select class="select--inputID" name="questions[question-'+ id +'][master_input_id]" onClick="onClick_Fields_InputSelection(this);">\
                        <option data-fieldtype="" value="選択してください" selected disabled>選択してください</option>\
                    </select>\
                </div>\
            </div>\
            <div class="tr requiredField">\
                <div class="th">必須</div>\
                <div class="td">\
                    <div class="custom__checkbox">\
                        <label>\
                            <input type="checkbox" value="1" name="questions[question-'+ id +'][is_required]">\
                            <span class="btn"></span>\
                        </label>\
                    </div>\
                    <p>この設問を解凍必須にする</p>\
                </div>\
            </div>\
            <div class="tr requiredField hasOthers hide">\
                <div class="th">その他</div>\
                <div class="td">\
                    <div class="custom__checkbox">\
                        <label>\
                            <input type="checkbox" value="1" name="questions[question-'+ id +'][has_others]">\
                            <span class="btn"></span>\
                        </label>\
                    </div>\
                    <p>その他のフィールドを追加</p>\
                </div>\
            </div>\
            <div class="tr">\
                <div class="th">設問前</div>\
                <div class="td">\
                    <textarea name="questions[question-'+ id +'][before_text]"></textarea>\
                </div>\
            </div>\
            <div class="tr">\
                <div class="th">設問後</div>\
                <div class="td">\
                    <textarea name="questions[question-'+ id +'][after_text]"></textarea>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
}

function add_admin_email_field_section_element() {
    return '\
<div class="row adminEmail adminForm">\
    <input type="text" name="admin_emails[]">\
        <div class="section__configCol txtadd"><a href="javascript:void(0);" onclick="onClick_Admin_Email_AddTxtElement(this)">\
        <p>+</p></a>\
    </div>\
    <div class="section__configCol txtdel"><a href="javascript:void(0);" onclick="onClick_Admin_Email_DelTxtElement(this)">\
        <p>-</p></a>\
    </div>\
</div>';
}

function add_user_email_field_section_element() {
    return '\
<div class="row userEmail userForm">\
    <input type="text" name="user_emails[]">\
        <div class="section__configCol txtadd"><a href="javascript:void(0);" onclick="onClick_User_Email_AddTxtElement(this)">\
        <p>+</p></a>\
    </div>\
    <div class="section__configCol txtdel"><a href="javascript:void(0);" onclick="onClick_User_Email_DelTxtElement(this)">\
        <p>-</p></a>\
    </div>\
</div>';
}

function onClick_Questions_AddSection(){
    var section = $('.section.question');
    if(section.length == 1){
        section.first().find('span.closeBtn').removeClass('hide');
    }

    var dataID = section.last().data('id')
    rowNum = dataID + 1;
    $(add_question_section(rowNum)).insertAfter(section.last());
}

function onClick_Questions_DelSection(e){
    $(e).closest('.section.question').remove();
    changeInputOption();
    // var rowContainer = $('#config-field .section__configRowContainer');
    var section = $('.section.question');
    if(section.length == 1){
        section.first().find('span.closeBtn').addClass('hide');
    }
}

function onClick_questionToggle(e) {
    $(e).toggleClass('js-toggle--arrow');
    $(e).parents('.section__row').next('.section__content').toggleClass('js-section__content');
    $(e).parents('.section__row').next('.section__content').slideToggle('fast');
}

function onClick_configToggle(e) {
	$(e).toggleClass('js-toggle--arrow');
	$(e).parents('.section__row').next('.section__content').toggleClass( 'js-section__content');
	$(e).parents('.section__row').next('.section__content').slideToggle('fast');
}

function onLoad_Questions() {
    $('.section.question').first().find('span.closeBtn').addClass('hide');
}

function onClick_Admin_Email_AddTxtElement(e) {
    var row = $(e).closest('.adminEmail');
    if (row.length == 1) {
        row.first().find('.txtdel').removeClass('hide');
    }

    $(e).closest('.txtadd').addClass('hide');
    $(add_admin_email_field_section_element()).insertAfter(row.last());
}

function onClick_Admin_Email_DelTxtElement(e) {
    $(e).closest('.adminEmail').remove();
    var row = $('.adminEmail');

    if (row.length == 1) {
        $(row).first().find('.txtdel').addClass('hide');
        $(row).first().find('.txtadd').removeClass('hide');
    } else {
        $(row).last().find('.txtadd').removeClass('hide');
    }
}

function onClick_User_Email_DelTxtElement(e) {
    $(e).closest('.userEmail').remove();
    var row = $('.userEmail');

    if (row.length == 1) {
        $(row).first().find('.txtdel').addClass('hide');
        $(row).first().find('.txtadd').removeClass('hide');
    } else {
        $(row).last().find('.txtadd').removeClass('hide');
    }
}

function onClick_User_Email_AddTxtElement(e) {
    var row = $(e).closest('.userEmail');
    if (row.length == 1) {
        row.first().find('.txtdel').removeClass('hide');
    }

    $(e).closest('.txtadd').addClass('hide');
    $(add_user_email_field_section_element()).insertAfter(row.last());
}



function findMasterInput(type) {
    return _.chain(masterInputs).values().flatten().filter(function (b) { return b.type == type }).value();
}

function onChange_Fields_TypeSelection(e) {
    var inputIDSection = $(e).closest('.section__content--table').find('.select--inputID');
    var others = $(e).closest('.section__content--table').find('.hasOthers');
    inputIDSection.empty().append('<option data-fieldtype="" value="選択してください" selected disabled>選択してください</option>');

    let inputs = findMasterInput(e.value);

    switch(e.value){
        case 'radio' :
        case 'checkbox' :
            others.removeClass('hide');
            break;
        default :
            others.removeClass('hide');
            others.addClass('hide');
            break;
    }

    $(".select--inputID").each(function () {
        if ($(this).children("option:selected").attr("id") && inputs[$(this).children("option:selected").attr("id")] && $(this).children("option:selected").attr("value") == inputs[$(this).children("option:selected").attr("id")]['id']) {
            delete inputs[$(this).children("option:selected").attr("id")];
        }
    });

    let masterInputId = (inputIDSection).data('id');

    _.forEach(inputs, function (value, key) {
        if (inputs[key]) {
            inputIDSection.append('<option value="' + inputs[key].id + '" id="' + key + '"  ' + (masterInputId == inputs[key].id ? 'selected' : '') + ' >' + inputs[key].name + '</option>');
        }
    });
}

function changeInputOption() {
    $(".select--inputID").each(function () {
        var inputSelect = $(this);
        var inputId = $(this).find('option:selected').attr('id');
        var typeIDSection = $(this).closest('.section__content--table').find('.select--type');

        let inputs = findMasterInput(typeIDSection[0].value);

        $(".select--inputID").each(function () {
            if ($(this).children("option:selected").attr("id") && inputs[$(this).children("option:selected").attr("id")] && inputId != $(this).children("option:selected").attr("id") && $(this).children("option:selected").attr("value") == inputs[$(this).children("option:selected").attr("id")]['id']) {
                delete inputs[$(this).children("option:selected").attr("id")];
            }
        });

        $(this).empty().append('<option data-fieldtype="" value="選択してください" selected disabled>選択してください</option>');
        _.forEach(inputs, function (value, key) {
            if (inputs[key]) {
                inputSelect.append('<option value="' + inputs[key].id + '" id="' + key + '" ' + (key == inputId ? 'selected' : '') + ' >' + inputs[key].name + '</option>');
            }
        });
    });
}

function onClick_Fields_InputSelection() {
    changeInputOption();
}

function show_And_Hide_AdminForm() {
    var checkedValue = $('[name=admin_is_notify]:checked').val();

    if (checkedValue == 1) {
        $('.adminForm').show();
    } else {
        $('.adminForm').find('input:text').val('');
        $('.adminForm').hide();
    }
}

function show_And_Hide_UserForm() {
    var checkedValue = $('[name=user_is_notify]:checked').val();
    if (checkedValue == 1) {
        $('.userForm').show();
    } else {
        $('.userForm').find('input:text').val('');
        $('.userForm').find('textarea').val('');
        $('.userForm').hide();
    }
}

$(function(){
    _.forEach($('.select--type'), function (e) {
        onChange_Fields_TypeSelection(e);
    });

    onLoad_Questions();
    changeInputOption();
    show_And_Hide_AdminForm();
    show_And_Hide_UserForm();
}); // ready
