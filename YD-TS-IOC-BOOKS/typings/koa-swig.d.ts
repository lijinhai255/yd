declare module "koa-swig" {
    function render<T>(value:T | render.DefaultSeetings):any;
    namespace render {
        interface DefaultSeetings { 
            root: string; 
            autoescape: boolean; 
            cache: string; 
            ext: string; 
            writeBody?: boolean; }
    }

    export default render
}