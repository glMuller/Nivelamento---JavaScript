function executarTarefa(nomeTarefa, callback) {
    console.log("Iniciando:", nomeTarefa);
    callback(); 
}
executarTarefa("Estudar JavaScript", () => {
    console.log("Tarefa concluída!");
});
