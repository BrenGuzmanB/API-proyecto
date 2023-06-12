function option(req, res){
    req.getConnection((error, conexion)=>{
        conexion.query('SELECT * FROM producto', (error, registros)=>{
            if(error){
                res.json(arr);
            }
            console.log(registros);
            res.render('tasks/option', {registros});
        });
    });
}

function mostrar_registros(req, res){
    req.getConnection((error, conexion)=>{
        conexion.query('SELECT * FROM producto', (error, registros)=>{
            if(error){
                res.json(arr);
            }
            console.log(registros);
            res.render('tasks/editview', {registros});
        });
    });
}
function create(req,res){
    res.render('tasks/create');
}
function store(req, res){
    const data = req.body;

    req.getConnection((error, conexion) =>{
        conexion.query('INSERT INTO producto SET ?',[data], (error, renglones)=>{
            console.log(renglones);
            res.redirect('/')
        });
    });
}

function destroy(req, res){
    const id = req.body.id;

    req.getConnection((error, conexion)=>{
        conexion.query('DELETE FROM producto WHERE id = ?', [id], (error, registros)=>{
            console.log(registros);
            res.redirect('/editview')
        });
    });
}
function edit(req, res){
    const id = req.params.id;
    req.getConnection((error, conexion)=>{
        conexion.query('SELECT * FROM producto WHERE id = ?',[id], (error, registros)=>{
            if(error){
                res.json(error);
            }
            res.render('tasks/edit', {registros});
        });
    });
}
function update(req, res){
    const id = req.params.id;
    const data = req.body;

    req.getConnection((error, conexion)=> {
        conexion.query('UPDATE producto SET ? WHERE id = ?', [data, id], (error, registros) =>{
            res.redirect('/');
        });
    });
}

module.exports = {
    option: option,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
    mostrar_registros: mostrar_registros
}