import { NgModule } from "@angular/core";
import { ConfirmDirective } from "./directives/confirm.directive";
import { LangPipe } from "./pipes/lang.pipe";
import { PluralPipe } from "./pipes/plural.pipe";

const imports = [ConfirmDirective, PluralPipe, LangPipe]

@NgModule({
    imports, // équivalent à imports: imports
    exports: imports
})
export class SharedModule {}