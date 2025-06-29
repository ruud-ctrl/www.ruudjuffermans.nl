import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";


export class PageBuilder {
    constructor(element = <></>) {
        this._element = element;
        this._props = {};
        this._useHookedProps = () => ({});
        this._wrapInPagePaper = false;
        this._title = undefined;
        this._subtitle = undefined;
    }

    element(element) {
        this._element = element;
        return this;
    }

    props(props) {
        this._props = { ...this._props, ...props };
        return this;
    }

    title(title) {
        this._title = title;
        this._wrapInPagePaper = true;
        return this;
    }

    subtitle(subtitle) {
        this._subtitle = subtitle;
        this._wrapInPagePaper = true;
        return this;
    }

    includeParams() {
        const previousHookedProps = this._useHookedProps;
        this._useHookedProps = () => {
            const params = useParams();
            const [searchParams] = useSearchParams();

            const searchParamsObject = {};
            for (const [key, value] of searchParams.entries()) {
                searchParamsObject[key] = value;
            }
    
            return {
                ...previousHookedProps?.(),
                params,
                searchParams: searchParamsObject,
            };
        };
        return this;
    }
    

    includeUserContext() {
        const previousHookedProps = this._useHookedProps;
        this._useHookedProps = () => {
            const { user } = useAuth();
            return {
                ...previousHookedProps?.(),
                user,
                isAdmin: user.role === "Admin",
            };
        };
        return this;
    }

    includeNavigate() {
        const previousHookedProps = this._useHookedProps;

        this._useHookedProps = () => {
            const navigate = useNavigate();
            return {
                ...previousHookedProps?.(),
                navigate,
            };
        };

        return this;
    }

    includeTheme() {
        const previousHookedProps = this._useHookedProps;

        this._useHookedProps = () => {
            const theme = useTheme();
            const colors = theme.palette
            return {
                ...previousHookedProps?.(),
                theme, colors,
            };
        };

        return this;
    }

    includeMobile() {
        const previousHookedProps = this._useHookedProps;

        this._useHookedProps = () => {
            const theme = useTheme();
            const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
            return {
                ...previousHookedProps?.(),
                isMobile,
            };
        };

        return this;
    }

    build() {
        const useHookedProps = this._useHookedProps;
        const Element = this._element;
        const staticProps = this._props;
        const wrapInPaper = this._wrapInPagePaper;
        const title = this._title;
        const subtitle = this._subtitle;

        return props => {
            const hookedProps = useHookedProps();

            const content = (
                <Element
                    {...props}
                    {...staticProps}
                    {...hookedProps}
                />
            );

            return (
                <PageContextProvider>
{content}
                </PageContextProvider>
            )
        }
    }
}

export function PageContextProvider({ children }) {
    return children;
}