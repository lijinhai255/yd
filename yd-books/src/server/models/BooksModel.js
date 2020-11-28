import axios from "axios"
import Safe from "../utils/SafeRequest"
class BooksModel {
    getBooksList(){
       return Safe.fetch("http://localhost/basic/web/index.php?r=books")

    }
    finBooks(id){

    }
    
}
export default BooksModel