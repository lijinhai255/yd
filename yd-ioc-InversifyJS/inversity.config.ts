import { Container} from "inversify"
import { Student, Teacher, ClassRoom } from "./interfaces";

import Types from "./types";
import { ZhiJia, YD, XiaoMing } from "./entities";

const container = new Container();

container.bind<Student>(Types.Student).to(XiaoMing)
container.bind<Teacher>(Types.Teacher).to(ZhiJia)
container.bind<ClassRoom>(Types.ClassRoom).to(YD)


export default container


