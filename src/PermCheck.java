import java.util.Arrays;
public class PermCheck {
    public static int solution(int A[]){
        Arrays.sort(A);
        for (int i = 0; i < A.length; ++i) {
            if (A[i] != i + 1) {
                return 0;
            }
        }
        return 1;
    }
    public static void main(String args[]) {
        PermCheck PE = new PermCheck();
        System.out.println(PE.solution(new int[]{4,1,3}));
    }
}
