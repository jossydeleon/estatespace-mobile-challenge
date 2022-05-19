/**
 * Handle http response
 * @param response response from server
 * @returns results
 */
export const handleError = async (response: Response) => {
    const result = await response.json();
    if (!response.ok) {
        throw Error(result.error || "There was an issue trying to access the resource");
    }

    return result;
}