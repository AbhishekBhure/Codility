import java.util.HashSet;

public class MissingInteger {

    public int solution(int[] A) {
        int num = 1;
        HashSet<Integer> hset = new HashSet<Integer>();

        for (int i = 0 ; i < A.length; i++) {
            hset.add(A[i]);
        }

        while (hset.contains(num)) {
            num++;
        }

        return num;
    }

    public static void main(String args[]) {
        MissingInteger MI = new MissingInteger();
        System.out.println(MI.solution(new int[]{-1, -3}));
    }
}
