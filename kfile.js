let project = new Project("luau");

project.setCppStd('c++17');
project.addDefine('LUAU');
project.addIncludeDir('Common/include');
project.addIncludeDir('VM/include')
project.addIncludeDir('VM/src')
project.addFile('VM/src/**');

project.addIncludeDir('Ast/include')
project.addFiles(
    'Ast/src/Ast.cpp',
    'Ast/src/Confusables.cpp',
    'Ast/src/Lexer.cpp',
    'Ast/src/Location.cpp',
    'Ast/src/Parser.cpp',
    'Ast/src/StringUtils.cpp',
    'Ast/src/TimeTrace.cpp',
);
project.addIncludeDir('Compiler/include')
project.addFiles(
    'Compiler/src/BytecodeBuilder.cpp',
    'Compiler/src/Compiler.cpp',
    'Compiler/src/Builtins.cpp',
    'Compiler/src/BuiltinFolding.cpp',
    'Compiler/src/ConstantFolding.cpp',
    'Compiler/src/CostModel.cpp',
    'Compiler/src/TableShape.cpp',
    'Compiler/src/ValueTracking.cpp',
    'Compiler/src/lcode.cpp',
    'Compiler/src/Builtins.h',
    'Compiler/src/BuiltinFolding.h',
    'Compiler/src/ConstantFolding.h',
    'Compiler/src/CostModel.h',
    'Compiler/src/TableShape.h',
    'Compiler/src/ValueTracking.h',
);

resolve(project);
