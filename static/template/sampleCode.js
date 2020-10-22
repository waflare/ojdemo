export default {
  'hello_world_c':
    '#include <stdio.h>\n' +
    '\n' +
    'int main() {\n' +
    '    printf("Hello World!");\n' +
    '    return 0;\n' +
    '}',
  'sample_1_c':
    '#include <stdio.h>\n' +
    '\n' +
    'int main() {\n' +
    '    int a, b;\n' +
    '    scanf("%d%d", &a, &b);\n' +
    '    printf("%d\\n", a+b);\n' +
    '    return 0;\n' +
    '}',
  'sample_2_c':
    '#include <stdio.h>\n' +
    '\n' +
    'int main() {\n' +
    '    int n, a, b;\n' +
    '    scanf("%d", &n);\n' +
    '    while(n--) {\n' +
    '        scanf("%d%d", &a, &b);\n' +
    '        printf("%d\\n", a+b);\n' +
    '    }\n' +
    '    return 0;\n' +
    '}',
  'sample_3_c':
    '#include <stdio.h>\n' +
    '\n' +
    'int main() {\n' +
    '    int a, b;\n' +
    '    while(scanf("%d%d", &a, &b) != EOF) {\n' +
    '        printf("%d\\n", a+b);\n' +
    '    }\n' +
    '    return 0;\n' +
    '}',
  'hello_world_cpp':
    '#include <iostream>\n' +
    '\n' +
    'using namespace std;\n' +
    '\n' +
    'int main() {\n' +
    '    cout << "Hello World!";\n' +
    '    return 0;\n' +
    '}',
  'sample_1_cpp':
    '#include <iostream>\n' +
    '\n' +
    'using namespace std;\n' +
    '\n' +
    'int main() {\n' +
    '    int a, b;\n' +
    '    cin >> a >> b;\n' +
    '    cout << a+b << endl;\n' +
    '    return 0;\n' +
    '}',
  'sample_2_cpp':
    '#include <iostream>\n' +
    '\n' +
    'using namespace std;\n' +
    '\n' +
    'int main() {\n' +
    '    int n, a, b;\n' +
    '    cin >> n;\n' +
    '    while(n--) {\n' +
    '        cin >> a >> b;\n' +
    '        cout << a + b << endl;\n' +
    '    }\n' +
    '    return 0;\n' +
    '}',
  'sample_3_cpp':
    '#include <iostream>\n' +
    '\n' +
    'using namespace std;\n' +
    '\n' +
    'int main() {\n' +
    '    int a, b;\n' +
    '    while(cin >> a >> b) {\n' +
    '        cout << a+b << endl;\n' +
    '    }\n' +
    '    return 0;\n' +
    '}',
  'hello_world_java':
    'import java.util.Scanner;\n' +
    '\n' +
    'public class Main {\n' +
    '    public static void main(String[] args) {\n' +
    '        System.out.printf("Hello World!");\n' +
    '    }\n' +
    '}',
  'sample_1_java':
    'import java.util.Scanner;\n' +
    '\n' +
    'public class Main {\n' +
    '    public static void main(String[] args) {\n' +
    '        Scanner in = new Scanner(System.in);\n' +
    '        int a = in.nextInt();\n' +
    '        int b = in.nextInt();\n' +
    '        System.out.println(a + b);\n' +
    '    }\n' +
    '}',
  'sample_2_java':
    'import java.util.Scanner;\n' +
    '\n' +
    'public class Main {\n' +
    '    public static void main(String[] args) {\n' +
    '        Scanner cin = new Scanner(System.in);\n' +
    '        int n,a,b;\n' +
    '        n = cin.nextInt();\n' +
    '        while(n-- > 0){\n' +
    '            a=cin.nextInt();\n' +
    '            b=cin.nextInt();\n' +
    '            System.out.println(a+b);\n' +
    '        }\n' +
    '    }\n' +
    '}',
  'sample_3_java':
    'import java.util.Scanner;\n' +
    '\n' +
    'public class Main {\n' +
    '    public static void main(String[] args) {\n' +
    '        Scanner in = new Scanner(System.in);\n' +
    '        while (in.hasNextInt()) {\n' +
    '            int a = in.nextInt();\n' +
    '            int b = in.nextInt();\n' +
    '            System.out.println(a + b);\n' +
    '        }\n' +
    '    }\n' +
    '}',
}
