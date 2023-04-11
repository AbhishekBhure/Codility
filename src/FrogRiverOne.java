import java.util.HashSet;
import java.util.Set;

public class FrogRiverOne {
    public static int solution(int X, int[] A) {
        Set<Integer> set = new HashSet<Integer>();
        for (int i = 0; i < A.length; i++) {
            if (set.add(A[i])) {
                X--;
            }
            if (X == 0) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String args[]) {
        FrogRiverOne FR = new FrogRiverOne();
        System.out.println(FR.solution(5,new int[]{1, 3, 1, 4, 2,3,5,4}));
    }
}

