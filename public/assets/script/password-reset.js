// 修改密码
$('#modifyForm').on('submit', function() {
    // 获取用户在表单中输入的内容
    var formData = $(this).serialize();
    //调用接口 实现密码修改功能
    $.ajax({
        url: '/users/password',
        type: 'put',
        data: formData,
        success: function() {
            location.href = "/admin/login.html"
        }
    })

    //阻止默认表单
    return false;
})