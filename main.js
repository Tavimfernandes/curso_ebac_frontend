$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeNovaTarefa = $('#nome-nova-tarefa').val();
        const novaTarefa = $('<li style="display: none"></li>');
        $(`
            <div class="tarefa">
                <p>${nomeNovaTarefa}</p>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $('#nome-nova-tarefa').val('')

        $('.tarefa').click(function(){
            $(this).addClass('efeitoLinha');
        })
    })

    
})
